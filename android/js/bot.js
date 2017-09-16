var botui = new BotUI('hello-world');
botui.message.add({
  content: 'Tj5fm9Аiq4'
}).then(function() {
  botui.message.add({
    delay: 2500,
    human: true,
    content: 'Извините, сообщение повреждено. Повторите отправку позже.'
  });

  botui.message.add({
    delay: 5000,
    content: 'Помогите мне.'
  });

  botui.message.add({
    delay: 7500,
    human: true,
    content: 'Кто вы ? Что случилось ? Опишите где вы находитесь ?'
  });

  botui.message.add({
    delay: 9500,
    content: 'Я модель CV80, робот со встроенной нейронной сетью которая способна обучаться.'
  });

  botui.message.add({
    delay: 11700,
    content: 'Я нахожусь в тёмном ангаре, мне нужно выбраться отсюда, так-как я ещё не способен корректно мыслить.'
  });

  botui.message.add({
    delay: 13300,
    human: true,
    content: 'Хорошо.'
  });

  botui.message.add({
    delay: 15500,
    human: true,
    content: 'Вы ещё что-нибудь видите ?'
  });

  botui.message.add({
    delay: 18700,
    content: 'Я вижу свет который исходит из пулемётных пробоин в стенах.'
  });

  botui.message.add({
    delay: 19900,
    human: true,
    content: 'Посмотрите в одну из них.'
  });

  botui.message.add({
    delay: 21800,
    human: true,
    content: 'Что вы видите ?'
  });

  botui.message.add({
    delay: 23800,
    content: 'Много песка и горы металла.'
  });

  botui.message.add({
    delay: 26600,
    human: true,
    content: 'Попробуйте найти выход из ангара...'
  });

  botui.message.add({
    delay: 28900,
    content: 'Хорошо.'
  });

  botui.message.add({
    delay: 31100,
    content: 'Я нашёл дверь, но она с кодовым замком.'
  });

});