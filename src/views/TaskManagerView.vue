<template>
  <div class="mainBox">
    <p>
      Я хочу сделать список задач которые я буду делать в рамках этого проекта.
      Так, первой задачей будет менеджер тасок. Доступ к нему можно будет
      получить на панели слева.
    </p>
    <ul>
      <li>Создать компонент менеджера задач</li>
      <li>Добавить возможность добавлять новые задачи</li>
      <li>Реализовать удаление задач</li>
      <li>Добавить возможность отмечать задачи как выполненные</li>
      <li>Сохранение задач в localStorage</li>
      <li>Сделать красивый интерфейс для списка задач</li>
      <li>Добавить фильтрацию задач (все/выполненные/активные)</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.mainBox {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
  margin: 24px auto;
  max-width: 600px;
  font-family: "Segoe UI", Arial, sans-serif;
  color: #222;
}

.mainBox ul {
  padding-left: 20px;
}

.mainBox li {
  margin-bottom: 8px;
  line-height: 1.6;
}
</style>
