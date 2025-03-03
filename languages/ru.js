module.exports = {
    footer: "Разработано code scripts | Prime Music v1.2",
    ping: {
      description: "Проверить задержку бота",
      response: "Измерение задержки...",
      embed: {
        title: "Задержка бота",
        responseTime: "- Время ответа бота: **{latency}мс**",
        websocketPing: "- Пинг WebSocket: **{ping}мс**",
        uptime: "- Время работы: **{uptime}**",
        footer: "Разработано code scripts | Prime Music v1.2"
      }
    },
    addsong: {
      embed: {
          playlistNotFound: "Плейлист не найден",
          playlistNotFoundDescription: "- Плейлист не найден.",
          accessDenied: "Доступ запрещён",
          accessDeniedDescription: "- У вас нет прав для добавления песен в этот плейлист.",
          songAdded: "Песня добавлена",
          songAddedDescription: "- Песня **{songInput}** добавлена в плейлист **{playlistName}**.",
          error: "Ошибка",
          errorDescription: "- Произошла ошибка при добавлении песни."
      }
    },
    allplaylists: {
      embed: {
          noPlaylistsFound: "Плейлисты не найдены",
          noPlaylistsFoundDescription: "- В данный момент нет доступных публичных плейлистов.",
          createdBy: "Создано: {userId}",
          serverName: "Сервер: {serverName}",
          songs: "Песен: **{songCount}**",
          publicPlaylistsTitle: "Публичные плейлисты (Страница {currentPage}/{totalPages})",
          error: "Ошибка",
          errorDescription: "- Произошла ошибка при получении плейлистов."
      }
    },
    autoplay: {
      embed: {
          autoplayUpdated: "Автовоспроизведение обновлено",
          autoplayStatus: "- Автовоспроизведение было **{status}** для этого сервера.",
          enabled: "включено",
          disabled: "отключено",
          error: "Ошибка",
          errorDescription: "- Произошла ошибка при обновлении автовоспроизведения."
      },
      commandDescription: "Включить или отключить автовоспроизведение"
    },
    createplaylist: {
      embed: {
          playlistExists: "Плейлист существует",
          playlistExistsDescription: "- Плейлист с таким именем уже существует.",
          playlistCreated: "Плейлист создан",
          playlistCreatedDescription: "- Плейлист **{playlistName}** создан.\n- Видимость: **{visibility}**.",
          private: "Приватный",
          public: "Публичный",
          error: "Ошибка",
          errorDescription: "- Произошла ошибка при создании плейлиста."
      },
      commandDescriptionName: "Введите название плейлиста",
      commandDescriptionPrivate: "Сделать плейлист приватным (видимым только для вас)"
    },
    deleteplaylist: {
      embed: {
          playlistNotFound: "Плейлист не найден",
          playlistNotFoundDescription: "- Плейлист не найден.",
          accessDenied: "Доступ запрещён",
          accessDeniedDescription: "- У вас нет прав для удаления этого плейлиста.",
          playlistDeleted: "Плейлист удалён",
          playlistDeletedDescription: "- Плейлист **{playlistName}** был удалён.",
          error: "Ошибка",
          errorDescription: "- Произошла ошибка при удалении плейлиста."
      },
      commandDescriptionName: "Введите название плейлиста"
    },
    deletesong: {
      embed: {
          playlistNotFound: "Плейлист не найден",
          playlistNotFoundDescription: "- Плейлист не найден.",
          songDeleted: "Песня удалена",
          songDeletedDescription: "- Песня **{songName}** удалена из плейлиста **{playlistName}**.",
          error: "Ошибка",
          errorDescription: "- Произошла ошибка при удалении песни."
      },
      commandDescriptionPlaylist: "Введите название плейлиста",
      commandDescriptionSong: "Введите название песни"
    },
    filters: {
      embed: {
          error: "Ошибка",
          noPlayer: "- Активный проигрыватель не найден. Сначала включите песню.",
          wrongChannel: "- Вы должны находиться в том же голосовом канале, что и бот, чтобы использовать эту команду.",
          filtersCleared: "Все фильтры очищены.",
          invalidFilter: "Выбран недействительный фильтр.",
          filterApplied: "Фильтр **{filter}** применён.",
          errorProcessing: "- Произошла ошибка при обработке вашего запроса."
      },
      commandDescription: "Выберите фильтр для применения"
    },
    help: {
      embed: {
          title: "📜 Справка {botName}",
          author: "Справка",
          description: `
          **Добро пожаловать в {botName}!**

          > Ваш идеальный музыкальный компаньон в Discord.
          > Подробная информация о боте:
                  
          **📂 Команды:** {totalCommands}
          **🌐 Серверы:** {totalServers}
          **👥 Пользователи:** {totalUsers}
          **⏳ Время работы:** {uptimeString}
          **📡 Пинг:** {ping}мс
          `,
          availableCommands: "Доступные команды",
          noDescription: "Описание отсутствует.",
          noCommands: "Команды не найдены.",
          error: "❌ Произошла ошибка при получении справки."
      },
      commandDescription: "Получить информацию о боте"
    },
    myplaylists: {
      embed: {
          noPlaylistsFound: "Плейлисты не найдены",
          noPlaylistsFoundDescription: "- У вас пока нет созданных плейлистов.",
          yourPlaylistsTitle: "Ваши плейлисты (Страница {currentPage}/{totalPages})",
          visibility: "Видимость",
          private: "Приватный",
          public: "Публичный",
          server: "Сервер",
          songs: "Песни",
          error: "Ошибка",
          errorDescription: "- Произошла ошибка при получении ваших плейлистов."
      }
    },
    nowPlaying: {
      embed: {
          error: "Ошибка",
          noSong: "- Сейчас ничего не играет.",
          nowPlaying: "Сейчас играет!",
          errorDescription: "- Произошла ошибка при обработке вашего запроса."
      }
    },
    pause: {
      embed: {
          error: "Ошибка",
          noActivePlayer: "- Активный проигрыватель не найден.",
          paused: "Приостановлено!",
          pausedDescription: "**- Воспроизведение приостановлено!**",
          errorDescription: "- Произошла ошибка при обработке вашего запроса."
      }
    },
    play: {
      embed: {
          error: "Ошибка",
          noVoiceChannel: "- Вы должны находиться в голосовом канале для использования этой команды.",
          noLavalinkNodes: "- Нет доступных узлов Lavalink для обработки запроса.",
          noResults: "- Результаты не найдены.",
          requestUpdated: "Запрос обновлён!",
          successProcessed: "- Ваш запрос успешно обработан.\n- Используйте кнопки для управления воспроизведением",
          errorProcessing: "- Произошла ошибка при обработке вашего запроса."
      },
      commandDescription: "Введите название песни / ссылку или плейлист"
    },
    playCustomPlaylist: {
      embed: {
          error: "Ошибка",
          noVoiceChannel: "- Вы должны находиться в голосовом канале для использования этой команды.",
          playlistNotFound: "- Плейлист не найден.",
          accessDenied: "Доступ запрещён",
          noPermission: "- У вас нет прав для воспроизведения этого приватного плейлиста.",
          emptyPlaylist: "- Плейлист пуст.",
          playingPlaylist: "Воспроизведение плейлиста!",
          playlistPlaying: "- Плейлист **{playlistName}** воспроизводится.\n- Используйте кнопки для управления воспроизведением",
          errorResolvingSong: "- Ошибка при обработке песни.",
          errorPlayingPlaylist: "- Произошла ошибка при воспроизведении плейлиста."
      },
      commandDescription: "Введите название плейлиста"
    },
    queue: {
      embed: {
          queueEmpty: "Очередь пуста",
          queueEmptyDescription: "- Очередь пуста. Добавьте песни с помощью команды `/play`.",
          currentQueue: "Текущая очередь",
          noMoreSongs: "- В очереди больше нет песен.",
          error: "Ошибка",
          errorDescription: "- Произошла ошибка при получении очереди."
      }
    },
    remove: {
      embed: {
          queueEmpty: "Очередь пуста",
          queueEmptyDescription: "- Очередь пуста. Добавьте песни с помощью команды `/play`.",
          invalidPosition: "Ошибка",
          invalidPositionDescription: "- Неверная позиция. Введите число от 1 до {queueLength}.",
          songRemoved: "Песня удалена",
          songRemovedDescription: "- Песня удалена из очереди: **{songTitle}**",
          error: "Ошибка",
          errorDescription: "- Произошла ошибка при удалении песни из очереди."
      }
    },
    resume: {
      embed: {
          noActivePlayer: "Ошибка",
          noActivePlayerDescription: "- Активный проигрыватель не найден.",
          resumed: "Возобновлено!",
          resumedDescription: "**- Воспроизведение возобновлено!**",
          error: "Ошибка",
          errorDescription: "- Произошла ошибка при обработке вашего запроса."
      }
    },
    showsongs: {
      embed: {
          error: "Ошибка",
          playlistNotFound: "- Плейлист не найден.",
          accessDenied: "Доступ запрещён",
          noPermission: "- У вас нет прав для просмотра этого приватного плейлиста.",
          noSongs: "- В этом плейлисте нет песен.",
          songsInPlaylist: "Песни в плейлисте {playlistName}",
          songsInPlaylistPage: "Песни в плейлисте {playlistName} (Страница {currentPage}/{totalPages})",
          errorDescription: "- Произошла ошибка при отображении песен."
      }
    },
    shuffle: {
      embed: {
          queueEmpty: "Очередь пуста",
          queueEmptyDescription: "- Очередь пуста. Добавьте песни с помощью команды `/play`.",
          queueShuffled: "Очередь перемешана",
          queueShuffledDescription: "- Очередь успешно перемешана.",
          error: "Ошибка",
          errorDescription: "- Произошла ошибка при перемешивании очереди."
      }
    },
    skip: {
      embed: {
          noActivePlayer: "Ошибка",
          noActivePlayerDescription: "- Активный проигрыватель не найден.",
          songSkipped: "Песня пропущена!",
          songSkippedDescription: "**- Проигрыватель включит следующую песню!**",
          error: "Ошибка",
          errorDescription: "- Произошла ошибка при обработке вашего запроса."
      }
    },
    stop: {
      embed: {
          noActivePlayer: "Ошибка",
          noActivePlayerDescription: "- Активный проигрыватель не найден.",
          musicHalted: "Музыка остановлена!",
          musicHaltedDescription: "**- Воспроизведение остановлено и проигрыватель закрыт!**",
          error: "Ошибка",
          errorDescription: "- Произошла ошибка при обработке вашего запроса."
      }
    },
    support: {
      embed: {
          authorName: "Сервер поддержки",
          description: "➡️ **Присоединяйтесь к нашему Discord серверу для поддержки и обновлений:**\n- Discord - {supportServerLink}\n\n➡️ **Подписывайтесь на нас:**\n- GitHub - {githubLink}\n- Replit - {replitLink}\n- YouTube - {youtubeLink}",
          error: "Ошибка",
          errorDescription: "- Произошла ошибка при обработке вашего запроса."
      }
    },
    volume: {
      embed: {
          noActivePlayer: "Ошибка",
          noActivePlayerDescription: "- Активный проигрыватель не найден.",
          volumeUpdated: "Громкость обновлена!",
          volumeUpdatedDescription: "- Громкость установлена на **{volume}%**",
          error: "Ошибка",
          errorDescription: "Произошла ошибка при установке громкости."
      },
      volumeRangeError: "Уровень громкости должен быть от 0 до 100."
    },
    errors: {
      noPermission: "У вас нет прав для использования этой команды.",
      generalError: "- Ошибка: {error}"
    }
};
