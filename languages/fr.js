module.exports = {
    footer: "Développé par code scripts | Prime Music v1.2",
    ping: {
      description: "Vérifier la latence du bot",
      response: "Mesure en cours...",
      embed: {
        title: "Latence du Bot",
        responseTime: "- Temps de réponse du bot : **{latency}ms**",
        websocketPing: "- Ping WebSocket : **{ping}ms**",
        uptime: "- Temps de fonctionnement : **{uptime}**",
        footer: "Développé par code scripts | Prime Music v1.2"
      }
    },
    addsong: {
      embed: {
          playlistNotFound: "Playlist Introuvable",
          playlistNotFoundDescription: "- Playlist introuvable.",
          accessDenied: "Accès Refusé",
          accessDeniedDescription: "- Vous n'avez pas la permission d'ajouter des chansons à cette playlist.",
          songAdded: "Chanson Ajoutée",
          songAddedDescription: "- La chanson **{songInput}** a été ajoutée à la playlist **{playlistName}**.",
          error: "Erreur",
          errorDescription: "- Une erreur est survenue lors de l'ajout de la chanson."
      }
    },
    allplaylists: {
      embed: {
          noPlaylistsFound: "Aucune Playlist Trouvée",
          noPlaylistsFoundDescription: "- Aucune playlist publique n'est actuellement disponible.",
          createdBy: "Créée par : {userId}",
          serverName: "Serveur : {serverName}",
          songs: "Chansons : **{songCount}**",
          publicPlaylistsTitle: "Playlists Publiques (Page {currentPage}/{totalPages})",
          error: "Erreur",
          errorDescription: "- Une erreur est survenue lors de la récupération des playlists."
      }
    },
    autoplay: {
      embed: {
          autoplayUpdated: "Lecture Automatique Mise à Jour",
          autoplayStatus: "- La lecture automatique a été **{status}** pour ce serveur.",
          enabled: "activée",
          disabled: "désactivée",
          error: "Erreur",
          errorDescription: "- Une erreur est survenue lors de la mise à jour de la lecture automatique."
      },
      commandDescription: "Activer ou désactiver la lecture automatique"
    },
    createplaylist: {
      embed: {
          playlistExists: "Playlist Existante",
          playlistExistsDescription: "- Une playlist avec ce nom existe déjà.",
          playlistCreated: "Playlist Créée",
          playlistCreatedDescription: "- La playlist **{playlistName}** a été créée.\n- Visibilité : **{visibility}**.",
          private: "Privée",
          public: "Publique",
          error: "Erreur",
          errorDescription: "- Une erreur est survenue lors de la création de la playlist."
      },
      commandDescriptionName: "Entrez le nom de la playlist",
      commandDescriptionPrivate: "Définir la playlist comme privée (visible uniquement par vous)"
    },
    deleteplaylist: {
      embed: {
          playlistNotFound: "Playlist Introuvable",
          playlistNotFoundDescription: "- Playlist introuvable.",
          accessDenied: "Accès Refusé",
          accessDeniedDescription: "- Vous n'avez pas la permission de supprimer cette playlist.",
          playlistDeleted: "Playlist Supprimée",
          playlistDeletedDescription: "- La playlist **{playlistName}** a été supprimée.",
          error: "Erreur",
          errorDescription: "- Une erreur est survenue lors de la suppression de la playlist."
      },
      commandDescriptionName: "Entrez le nom de la playlist"
    },
    deletesong: {
      embed: {
          playlistNotFound: "Playlist Introuvable",
          playlistNotFoundDescription: "- Playlist introuvable.",
          songDeleted: "Chanson Supprimée",
          songDeletedDescription: "- La chanson **{songName}** a été supprimée de la playlist **{playlistName}**.",
          error: "Erreur",
          errorDescription: "- Une erreur est survenue lors de la suppression de la chanson."
      },
      commandDescriptionPlaylist: "Entrez le nom de la playlist",
      commandDescriptionSong: "Entrez le nom de la chanson"
    },
    filters: {
      embed: {
          error: "Erreur",
          noPlayer: "- Aucun lecteur actif trouvé. Veuillez d'abord lancer une chanson.",
          wrongChannel: "- Vous devez être dans le même canal vocal que le bot pour utiliser cette commande.",
          filtersCleared: "Tous les filtres ont été supprimés.",
          invalidFilter: "Filtre sélectionné invalide.",
          filterApplied: "Le filtre **{filter}** a été appliqué.",
          errorProcessing: "- Une erreur est survenue lors du traitement de votre demande."
      },
      commandDescription: "Sélectionnez un filtre à appliquer"
    },
    help: {
      embed: {
          title: "📜 Menu d'Aide de {botName}",
          author: "Aide",
          description: `
          **Bienvenue sur {botName}!**

          > Votre compagnon musical ultime sur Discord.
          > Voici les informations détaillées sur le bot :
                  
          **📂 Commandes :** {totalCommands}
          **🌐 Serveurs :** {totalServers}
          **👥 Utilisateurs :** {totalUsers}
          **⏳ Temps de fonctionnement :** {uptimeString}
          **📡 Ping :** {ping}ms
          `,
          availableCommands: "Commandes Disponibles",
          noDescription: "Aucune description disponible.",
          noCommands: "Aucune commande trouvée.",
          error: "❌ Une erreur est survenue lors de la récupération du menu d'aide."
      },
      commandDescription: "Obtenir des informations sur le bot"
    },
    myplaylists: {
      embed: {
          noPlaylistsFound: "Aucune Playlist Trouvée",
          noPlaylistsFoundDescription: "- Vous n'avez créé aucune playlist.",
          yourPlaylistsTitle: "Vos Playlists (Page {currentPage}/{totalPages})",
          visibility: "Visibilité",
          private: "Privée",
          public: "Publique",
          server: "Serveur",
          songs: "Chansons",
          error: "Erreur",
          errorDescription: "- Une erreur est survenue lors de la récupération de vos playlists."
      }
    },
    nowPlaying: {
      embed: {
          error: "Erreur",
          noSong: "- Aucune chanson n'est en cours de lecture.",
          nowPlaying: "En Lecture !",
          errorDescription: "- Une erreur est survenue lors du traitement de votre demande."
      }
    },
    pause: {
      embed: {
          error: "Erreur",
          noActivePlayer: "- Aucun lecteur actif trouvé.",
          paused: "En Pause !",
          pausedDescription: "**- La lecture a été mise en pause !**",
          errorDescription: "- Une erreur est survenue lors du traitement de votre demande."
      }
    },
    play: {
      embed: {
          error: "Erreur",
          noVoiceChannel: "- Vous devez être dans un canal vocal pour utiliser cette commande.",
          noLavalinkNodes: "- Aucun nœud Lavalink disponible pour traiter la demande.",
          noResults: "- Aucun résultat trouvé.",
          requestUpdated: "Demande Mise à Jour !",
          successProcessed: "- Votre demande a été traitée avec succès.\n- Veuillez utiliser les boutons pour contrôler la lecture",
          errorProcessing: "- Une erreur est survenue lors du traitement de votre demande."
      },
      commandDescription: "Entrez le nom de la chanson / lien ou playlist"
    },
    playCustomPlaylist: {
      embed: {
          error: "Erreur",
          noVoiceChannel: "- Vous devez être dans un canal vocal pour utiliser cette commande.",
          playlistNotFound: "- Playlist introuvable.",
          accessDenied: "Accès Refusé",
          noPermission: "- Vous n'avez pas la permission de lire cette playlist privée.",
          emptyPlaylist: "- La playlist est vide.",
          playingPlaylist: "Lecture de la Playlist !",
          playlistPlaying: "- La playlist **{playlistName}** est en cours de lecture.\n- Veuillez utiliser les boutons pour contrôler la lecture",
          errorResolvingSong: "- Erreur lors de la résolution de la chanson.",
          errorPlayingPlaylist: "- Une erreur est survenue lors de la lecture de la playlist."
      },
      commandDescription: "Entrez le nom de la playlist"
    },
    queue: {
      embed: {
          queueEmpty: "File d'Attente Vide",
          queueEmptyDescription: "- La file d'attente est actuellement vide. Ajoutez des chansons avec la commande `/play`.",
          currentQueue: "File d'Attente Actuelle",
          noMoreSongs: "- Plus de chansons dans la file d'attente.",
          error: "Erreur",
          errorDescription: "- Une erreur est survenue lors de la récupération de la file d'attente."
      }
    },
    remove: {
      embed: {
          queueEmpty: "File d'Attente Vide",
          queueEmptyDescription: "- La file d'attente est actuellement vide. Ajoutez des chansons avec la commande `/play`.",
          invalidPosition: "Erreur",
          invalidPositionDescription: "- Position invalide. Entrez un nombre entre 1 et {queueLength}.",
          songRemoved: "Chanson Supprimée",
          songRemovedDescription: "- Chanson supprimée : **{songTitle}** de la file d'attente.",
          error: "Erreur",
          errorDescription: "- Une erreur est survenue lors de la suppression de la chanson de la file d'attente."
      }
    },
    resume: {
      embed: {
          noActivePlayer: "Erreur",
          noActivePlayerDescription: "- Aucun lecteur actif trouvé.",
          resumed: "Reprise !",
          resumedDescription: "**- La lecture a repris !**",
          error: "Erreur",
          errorDescription: "- Une erreur est survenue lors du traitement de votre demande."
      }
    },
    showsongs: {
      embed: {
          error: "Erreur",
          playlistNotFound: "- Playlist introuvable.",
          accessDenied: "Accès Refusé",
          noPermission: "- Vous n'avez pas la permission de voir cette playlist privée.",
          noSongs: "- Aucune chanson dans cette playlist.",
          songsInPlaylist: "Chansons dans {playlistName}",
          songsInPlaylistPage: "Chansons dans {playlistName} (Page {currentPage}/{totalPages})",
          errorDescription: "- Une erreur est survenue lors de l'affichage des chansons."
      }
    },
    shuffle: {
      embed: {
          queueEmpty: "File d'Attente Vide",
          queueEmptyDescription: "- La file d'attente est actuellement vide. Ajoutez des chansons avec la commande `/play`.",
          queueShuffled: "File d'Attente Mélangée",
          queueShuffledDescription: "- La file d'attente a été mélangée avec succès.",
          error: "Erreur",
          errorDescription: "- Une erreur est survenue lors du mélange de la file d'attente."
      }
    },
    skip: {
      embed: {
          noActivePlayer: "Erreur",
          noActivePlayerDescription: "- Aucun lecteur actif trouvé.",
          songSkipped: "Chanson Passée !",
          songSkippedDescription: "**- Le lecteur va jouer la chanson suivante !**",
          error: "Erreur",
          errorDescription: "- Une erreur est survenue lors du traitement de votre demande."
      }
    },
    stop: {
      embed: {
          noActivePlayer: "Erreur",
          noActivePlayerDescription: "- Aucun lecteur actif trouvé.",
          musicHalted: "Musique Arrêtée !",
          musicHaltedDescription: "**- La lecture a été arrêtée et le lecteur détruit !**",
          error: "Erreur",
          errorDescription: "- Une erreur est survenue lors du traitement de votre demande."
      }
    },
    support: {
      embed: {
          authorName: "Serveur de Support",
          description: "➡️ **Rejoignez notre serveur Discord pour le support et les mises à jour :**\n- Discord - {supportServerLink}\n\n➡️ **Suivez-nous sur :**\n- GitHub - {githubLink}\n- Replit - {replitLink}\n- YouTube - {youtubeLink}",
          error: "Erreur",
          errorDescription: "- Une erreur est survenue lors du traitement de votre demande."
      }
    },
    volume: {
      embed: {
          noActivePlayer: "Erreur",
          noActivePlayerDescription: "- Aucun lecteur actif trouvé.",
          volumeUpdated: "Volume Mis à Jour !",
          volumeUpdatedDescription: "- Le volume a été réglé à **{volume}%**",
          error: "Erreur",
          errorDescription: "Une erreur est survenue lors du réglage du volume."
      },
      volumeRangeError: "Le niveau de volume doit être entre 0 et 100."
    },
    errors: {
      noPermission: "Vous n'avez pas la permission d'utiliser cette commande.",
      generalError: "- Erreur : {error}"
    }
};
