module.exports = {
    footer: "Desenvolvido por code scripts | Prime Music v1.2",
    ping: {
      description: "Verificar latência do bot",
      response: "Medindo latência...",
      embed: {
        title: "Latência do Bot",
        responseTime: "- Tempo de resposta do bot: **{latency}ms**",
        websocketPing: "- Ping do WebSocket: **{ping}ms**",
        uptime: "- Tempo online: **{uptime}**",
        footer: "Desenvolvido por code scripts | Prime Music v1.2"
      }
    },
    addsong: {
      embed: {
          playlistNotFound: "Playlist não encontrada",
          playlistNotFoundDescription: "- A playlist não foi encontrada.",
          accessDenied: "Acesso negado",
          accessDeniedDescription: "- Você não tem permissão para adicionar músicas a esta playlist.",
          songAdded: "Música adicionada",
          songAddedDescription: "- A música **{songInput}** foi adicionada à playlist **{playlistName}**.",
          error: "Erro",
          errorDescription: "- Ocorreu um erro ao adicionar a música."
      }
    },
    allplaylists: {
      embed: {
          noPlaylistsFound: "Nenhuma playlist encontrada",
          noPlaylistsFoundDescription: "- Não há playlists públicas disponíveis no momento.",
          createdBy: "Criado por: {userId}",
          serverName: "Servidor: {serverName}",
          songs: "Músicas: **{songCount}**",
          publicPlaylistsTitle: "Playlists Públicas (Página {currentPage}/{totalPages})",
          error: "Erro",
          errorDescription: "- Ocorreu um erro ao buscar as playlists."
      }
    },
    autoplay: {
      embed: {
          autoplayUpdated: "Reprodução automática atualizada",
          autoplayStatus: "- A reprodução automática foi **{status}** para este servidor.",
          enabled: "ativada",
          disabled: "desativada",
          error: "Erro",
          errorDescription: "- Ocorreu um erro ao atualizar a reprodução automática."
      },
      commandDescription: "Ativar ou desativar a reprodução automática"
    },
    createplaylist: {
      embed: {
          playlistExists: "Playlist já existe",
          playlistExistsDescription: "- Uma playlist com este nome já existe.",
          playlistCreated: "Playlist criada",
          playlistCreatedDescription: "- A playlist **{playlistName}** foi criada.\n- Visibilidade: **{visibility}**.",
          private: "Privada",
          public: "Pública",
          error: "Erro",
          errorDescription: "- Ocorreu um erro ao criar a playlist."
      },
      commandDescriptionName: "Digite o nome da playlist",
      commandDescriptionPrivate: "Definir playlist como privada (visível apenas para você)"
    },
    deleteplaylist: {
      embed: {
          playlistNotFound: "Playlist não encontrada",
          playlistNotFoundDescription: "- A playlist não foi encontrada.",
          accessDenied: "Acesso negado",
          accessDeniedDescription: "- Você não tem permissão para excluir esta playlist.",
          playlistDeleted: "Playlist excluída",
          playlistDeletedDescription: "- A playlist **{playlistName}** foi excluída.",
          error: "Erro",
          errorDescription: "- Ocorreu um erro ao excluir a playlist."
      },
      commandDescriptionName: "Digite o nome da playlist"
    },
    deletesong: {
      embed: {
          playlistNotFound: "Playlist não encontrada",
          playlistNotFoundDescription: "- A playlist não foi encontrada.",
          songDeleted: "Música removida",
          songDeletedDescription: "- A música **{songName}** foi removida da playlist **{playlistName}**.",
          error: "Erro",
          errorDescription: "- Ocorreu um erro ao remover a música."
      },
      commandDescriptionPlaylist: "Digite o nome da playlist",
      commandDescriptionSong: "Digite o nome da música"
    },
    filters: {
      embed: {
          error: "Erro",
          noPlayer: "- Nenhum player ativo encontrado. Por favor, reproduza uma música primeiro.",
          wrongChannel: "- Você precisa estar no mesmo canal de voz que o bot para usar este comando.",
          filtersCleared: "Todos os filtros foram removidos.",
          invalidFilter: "Filtro inválido selecionado.",
          filterApplied: "Filtro **{filter}** aplicado.",
          errorProcessing: "- Ocorreu um erro ao processar sua solicitação."
      },
      commandDescription: "Selecione um filtro para aplicar"
    },
    help: {
      embed: {
          title: "📜 Menu de Ajuda do {botName}",
          author: "Ajuda",
          description: `
          **Bem-vindo ao {botName}!**

          > Seu companheiro musical definitivo no Discord.
          > Aqui estão as informações detalhadas do bot:
                  
          **📂 Comandos:** {totalCommands}
          **🌐 Servidores:** {totalServers}
          **👥 Usuários:** {totalUsers}
          **⏳ Tempo online:** {uptimeString}
          **📡 Ping:** {ping}ms
          `,
          availableCommands: "Comandos disponíveis",
          noDescription: "Nenhuma descrição disponível.",
          noCommands: "Nenhum comando encontrado.",
          error: "❌ Ocorreu um erro ao buscar o menu de ajuda."
      },
      commandDescription: "Obter informações sobre o bot"
    },
    myplaylists: {
      embed: {
          noPlaylistsFound: "Nenhuma playlist encontrada",
          noPlaylistsFoundDescription: "- Você ainda não criou nenhuma playlist.",
          yourPlaylistsTitle: "Suas Playlists (Página {currentPage}/{totalPages})",
          visibility: "Visibilidade",
          private: "Privada",
          public: "Pública",
          server: "Servidor",
          songs: "Músicas",
          error: "Erro",
          errorDescription: "- Ocorreu um erro ao buscar suas playlists."
      }
    },
    nowPlaying: {
      embed: {
          error: "Erro",
          noSong: "- Nenhuma música está sendo reproduzida no momento.",
          nowPlaying: "Tocando agora!",
          errorDescription: "- Ocorreu um erro ao processar sua solicitação."
      }
    },
    pause: {
      embed: {
          error: "Erro",
          noActivePlayer: "- Nenhum player ativo encontrado.",
          paused: "Pausado!",
          pausedDescription: "**- A reprodução foi pausada!**",
          errorDescription: "- Ocorreu um erro ao processar sua solicitação."
      }
    },
    play: {
      embed: {
          error: "Erro",
          noVoiceChannel: "- Você precisa estar em um canal de voz para usar este comando.",
          noLavalinkNodes: "- Não há nós Lavalink disponíveis para processar a solicitação.",
          noResults: "- Nenhum resultado encontrado.",
          requestUpdated: "Solicitação atualizada!",
          successProcessed: "- Sua solicitação foi processada com sucesso.\n- Use os botões para controlar a reprodução",
          errorProcessing: "- Ocorreu um erro ao processar sua solicitação."
      },
      commandDescription: "Digite o nome da música / link ou playlist"
    },
    playCustomPlaylist: {
      embed: {
          error: "Erro",
          noVoiceChannel: "- Você precisa estar em um canal de voz para usar este comando.",
          playlistNotFound: "- Playlist não encontrada.",
          accessDenied: "Acesso negado",
          noPermission: "- Você não tem permissão para reproduzir esta playlist privada.",
          emptyPlaylist: "- A playlist está vazia.",
          playingPlaylist: "Reproduzindo playlist!",
          playlistPlaying: "- A playlist **{playlistName}** está sendo reproduzida.\n- Use os botões para controlar a reprodução",
          errorResolvingSong: "- Erro ao resolver a música.",
          errorPlayingPlaylist: "- Ocorreu um erro ao reproduzir a playlist."
      },
      commandDescription: "Digite o nome da playlist"
    },
    queue: {
      embed: {
          queueEmpty: "Fila vazia",
          queueEmptyDescription: "- A fila está vazia. Adicione músicas usando o comando `/play`.",
          currentQueue: "Fila atual",
          noMoreSongs: "- Não há mais músicas na fila.",
          error: "Erro",
          errorDescription: "- Ocorreu um erro ao buscar a fila."
      }
    },
    remove: {
      embed: {
          queueEmpty: "Fila vazia",
          queueEmptyDescription: "- A fila está vazia. Adicione músicas usando o comando `/play`.",
          invalidPosition: "Erro",
          invalidPositionDescription: "- Posição inválida. Digite um número entre 1 e {queueLength}.",
          songRemoved: "Música removida",
          songRemovedDescription: "- Música removida da fila: **{songTitle}**",
          error: "Erro",
          errorDescription: "- Ocorreu um erro ao remover a música da fila."
      }
    },
    resume: {
      embed: {
          noActivePlayer: "Erro",
          noActivePlayerDescription: "- Nenhum player ativo encontrado.",
          resumed: "Retomado!",
          resumedDescription: "**- A reprodução foi retomada!**",
          error: "Erro",
          errorDescription: "- Ocorreu um erro ao processar sua solicitação."
      }
    },
    showsongs: {
      embed: {
          error: "Erro",
          playlistNotFound: "- Playlist não encontrada.",
          accessDenied: "Acesso negado",
          noPermission: "- Você não tem permissão para ver esta playlist privada.",
          noSongs: "- Não há músicas nesta playlist.",
          songsInPlaylist: "Músicas em {playlistName}",
          songsInPlaylistPage: "Músicas em {playlistName} (Página {currentPage}/{totalPages})",
          errorDescription: "- Ocorreu um erro ao exibir as músicas."
      }
    },
    shuffle: {
      embed: {
          queueEmpty: "Fila vazia",
          queueEmptyDescription: "- A fila está vazia. Adicione músicas usando o comando `/play`.",
          queueShuffled: "Fila embaralhada",
          queueShuffledDescription: "- A fila foi embaralhada com sucesso.",
          error: "Erro",
          errorDescription: "- Ocorreu um erro ao embaralhar a fila."
      }
    },
    skip: {
      embed: {
          noActivePlayer: "Erro",
          noActivePlayerDescription: "- Nenhum player ativo encontrado.",
          songSkipped: "Música pulada!",
          songSkippedDescription: "**- O player irá reproduzir a próxima música!**",
          error: "Erro",
          errorDescription: "- Ocorreu um erro ao processar sua solicitação."
      }
    },
    stop: {
      embed: {
          noActivePlayer: "Erro",
          noActivePlayerDescription: "- Nenhum player ativo encontrado.",
          musicHalted: "Música parada!",
          musicHaltedDescription: "**- A reprodução foi interrompida e o player foi encerrado!**",
          error: "Erro",
          errorDescription: "- Ocorreu um erro ao processar sua solicitação."
      }
    },
    support: {
      embed: {
          authorName: "Servidor de Suporte",
          description: "➡️ **Entre em nosso servidor Discord para suporte e atualizações:**\n- Discord - {supportServerLink}\n\n➡️ **Siga-nos:**\n- GitHub - {githubLink}\n- Replit - {replitLink}\n- YouTube - {youtubeLink}",
          error: "Erro",
          errorDescription: "- Ocorreu um erro ao processar sua solicitação."
      }
    },
    volume: {
      embed: {
          noActivePlayer: "Erro",
          noActivePlayerDescription: "- Nenhum player ativo encontrado.",
          volumeUpdated: "Volume atualizado!",
          volumeUpdatedDescription: "- Volume definido para **{volume}%**",
          error: "Erro",
          errorDescription: "Ocorreu um erro ao definir o volume."
      },
      volumeRangeError: "O volume deve estar entre 0 e 100."
    },
    errors: {
      noPermission: "Você não tem permissão para usar este comando.",
      generalError: "- Erro: {error}"
    }
};
