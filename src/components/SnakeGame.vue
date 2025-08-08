<template>
  <div class="game-container">
    <canvas
      ref="canvas"
      tabindex="0"
      @keydown="handleKeydown"
      :width="screenWidth"
      :height="screenHeight"
    />
    <div v-if="gameStatus === 'loading'" class="status-message">
      Loading game...
    </div>
    <div v-if="gameStatus === 'error'" class="status-message error">
      Failed to load game
      <button @click="initGame">Retry</button>
    </div>
    <div v-if="gameStatus === 'ready' && pause" class="status-message">
      GAME PAUSED
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const canvas = ref(null);
const gameStatus = ref("loading"); // loading, ready, error
const pause = ref(false);
const screenWidth = ref(800);
const screenHeight = ref(450);

let gameModule = null;

const initGame = async () => {
  gameStatus.value = "loading";

  try {
    // Удаляем предыдущий модуль если есть
    if (gameModule) {
      cleanup();
    }

    // Создаем объект Module для Emscripten
    window.Module = {
      canvas: canvas.value,
      setStatus: (text) => console.log(text),
      onRuntimeInitialized: () => {
        gameStatus.value = "ready";
        canvas.value.focus();
      },
      onAbort: (error) => {
        console.error("Initialization failed:", error);
        gameStatus.value = "error";
      },
    };

    // Загружаем WASM модуль
    gameModule = await loadWasm();

    // Ручная инициализация, если нужно
    if (gameModule._main) {
      gameModule._main();
    }
  } catch (error) {
    console.error("Game initialization error:", error);
    gameStatus.value = "error";
  }
};

const loadWasm = async () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "/wasm/snake/index.js";

    // Решаем проблему с import.meta
    script.type = "module";

    script.onload = () => {
      resolve(window.Module);
    };
    script.onerror = (err) => {
      reject(new Error(`Failed to load WASM script: ${err}`));
    };

    document.head.appendChild(script);
  });
};

const handleKeydown = (event) => {
  if (!gameModule) return;

  // Передаем нажатия клавиш в WASM
  const keyMap = {
    ArrowUp: 265,
    ArrowDown: 264,
    ArrowLeft: 263,
    ArrowRight: 262,
    Enter: 257,
    Escape: 256,
    p: 80,
    P: 80,
  };

  const keyCode = keyMap[event.key];
  if (keyCode !== undefined) {
    gameModule._emscripten_push_key_event(keyCode, 1); // key down
    setTimeout(() => {
      gameModule._emscripten_push_key_event(keyCode, 0); // key up
    }, 50);
  }
};

const cleanup = () => {
  if (gameModule) {
    // Останавливаем игровой цикл
    if (typeof gameModule._emscripten_cancel_main_loop === "function") {
      gameModule._emscripten_cancel_main_loop();
    }

    // Очищаем ресурсы
    if (typeof gameModule._free === "function") {
      // Здесь должна быть очистка выделенной памяти
    }

    delete window.Module;
    gameModule = null;
  }
};

onMounted(() => {
  initGame();
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  cleanup();
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
.game-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 450px;
  background-color: #f0f0f0;
  margin: 20px auto;
  max-width: 800px;
}

canvas {
  background: white;
  display: block;
  border: 1px solid #ddd;
}

.status-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 5px;
  text-align: center;
}

.error {
  background: rgba(200, 0, 0, 0.7);
}

button {
  margin-top: 10px;
  padding: 5px 15px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
