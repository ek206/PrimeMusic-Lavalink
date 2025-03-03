module.exports = {
    footer: "由 code scripts 开发 | Prime Music v1.2",
    ping: {
      description: "检查机器人延迟",
      response: "正在测试延迟...",
      embed: {
        title: "机器人延迟",
        responseTime: "- 机器人响应时间：**{latency}毫秒**",
        websocketPing: "- WebSocket延迟：**{ping}毫秒**",
        uptime: "- 运行时间：**{uptime}**",
        footer: "由 code scripts 开发 | Prime Music v1.2"
      }
    },
    addsong: {
      embed: {
          playlistNotFound: "未找到播放列表",
          playlistNotFoundDescription: "- 未找到播放列表。",
          accessDenied: "访问被拒绝",
          accessDeniedDescription: "- 您没有权限向此播放列表添加歌曲。",
          songAdded: "已添加歌曲",
          songAddedDescription: "- 歌曲 **{songInput}** 已添加到播放列表 **{playlistName}**。",
          error: "错误",
          errorDescription: "- 添加歌曲时发生错误。"
      }
    },
    allplaylists: {
      embed: {
          noPlaylistsFound: "未找到播放列表",
          noPlaylistsFoundDescription: "- 目前没有可用的公共播放列表。",
          createdBy: "创建者：{userId}",
          serverName: "服务器：{serverName}",
          songs: "歌曲数：**{songCount}**",
          publicPlaylistsTitle: "公共播放列表（第 {currentPage}/{totalPages} 页）",
          error: "错误",
          errorDescription: "- 获取播放列表时发生错误。"
      }
    },
    autoplay: {
      embed: {
          autoplayUpdated: "自动播放已更新",
          autoplayStatus: "- 此服务器的自动播放已被**{status}**。",
          enabled: "启用",
          disabled: "禁用",
          error: "错误",
          errorDescription: "- 更新自动播放时发生错误。"
      },
      commandDescription: "启用或禁用自动播放"
    },
    createplaylist: {
      embed: {
          playlistExists: "播放列表已存在",
          playlistExistsDescription: "- 已存在同名播放列表。",
          playlistCreated: "播放列表已创建",
          playlistCreatedDescription: "- 播放列表 **{playlistName}** 已创建。\n- 可见性：**{visibility}**。",
          private: "私密",
          public: "公开",
          error: "错误",
          errorDescription: "- 创建播放列表时发生错误。"
      },
      commandDescriptionName: "输入播放列表名称",
      commandDescriptionPrivate: "将播放列表设为私密（仅您可见）"
    },
    deleteplaylist: {
      embed: {
          playlistNotFound: "未找到播放列表",
          playlistNotFoundDescription: "- 未找到播放列表。",
          accessDenied: "访问被拒绝",
          accessDeniedDescription: "- 您没有权限删除此播放列表。",
          playlistDeleted: "播放列表已删除",
          playlistDeletedDescription: "- 播放列表 **{playlistName}** 已被删除。",
          error: "错误",
          errorDescription: "- 删除播放列表时发生错误。"
      },
      commandDescriptionName: "输入播放列表名称"
    },
    deletesong: {
      embed: {
          playlistNotFound: "未找到播放列表",
          playlistNotFoundDescription: "- 未找到播放列表。",
          songDeleted: "歌曲已删除",
          songDeletedDescription: "- 歌曲 **{songName}** 已从播放列表 **{playlistName}** 中删除。",
          error: "错误",
          errorDescription: "- 删除歌曲时发生错误。"
      },
      commandDescriptionPlaylist: "输入播放列表名称",
      commandDescriptionSong: "输入歌曲名称"
    },
    filters: {
      embed: {
          error: "错误",
          noPlayer: "- 未找到活动播放器。请先播放歌曲。",
          wrongChannel: "- 您需要与机器人在同一语音频道才能使用此命令。",
          filtersCleared: "所有过滤器已清除。",
          invalidFilter: "选择的过滤器无效。",
          filterApplied: "过滤器 **{filter}** 已应用。",
          errorProcessing: "- 处理您的请求时发生错误。"
      },
      commandDescription: "选择要应用的过滤器"
    },
    help: {
      embed: {
          title: "📜 {botName} 帮助菜单",
          author: "帮助",
          description: `
          **欢迎使用 {botName}！**

          > 您在 Discord 上的终极音乐伴侣。
          > 以下是机器人的详细信息：
                  
          **📂 命令数：** {totalCommands}
          **🌐 服务器数：** {totalServers}
          **👥 用户数：** {totalUsers}
          **⏳ 运行时间：** {uptimeString}
          **📡 延迟：** {ping}毫秒
          `,
          availableCommands: "可用命令",
          noDescription: "暂无描述。",
          noCommands: "未找到命令。",
          error: "❌ 获取帮助菜单时发生错误。"
      },
      commandDescription: "获取机器人信息"
    },
    myplaylists: {
      embed: {
          noPlaylistsFound: "未找到播放列表",
          noPlaylistsFoundDescription: "- 您还没有创建任何播放列表。",
          yourPlaylistsTitle: "您的播放列表（第 {currentPage}/{totalPages} 页）",
          visibility: "可见性",
          private: "私密",
          public: "公开",
          server: "服务器",
          songs: "歌曲",
          error: "错误",
          errorDescription: "- 获取您的播放列表时发生错误。"
      }
    },
    nowPlaying: {
      embed: {
          error: "错误",
          noSong: "- 当前没有正在播放的歌曲。",
          nowPlaying: "正在播放！",
          errorDescription: "- 处理您的请求时发生错误。"
      }
    },
    pause: {
      embed: {
          error: "错误",
          noActivePlayer: "- 未找到活动播放器。",
          paused: "已暂停！",
          pausedDescription: "**- 播放已暂停！**",
          errorDescription: "- 处理您的请求时发生错误。"
      }
    },
    play: {
      embed: {
          error: "错误",
          noVoiceChannel: "- 您需要在语音频道中才能使用此命令。",
          noLavalinkNodes: "- 没有可用的 Lavalink 节点来处理请求。",
          noResults: "- 未找到结果。",
          requestUpdated: "请求已更新！",
          successProcessed: "- 您的请求已成功处理。\n- 请使用按钮控制播放",
          errorProcessing: "- 处理您的请求时发生错误。"
      },
      commandDescription: "输入歌曲名称/链接或播放列表"
    },
    playCustomPlaylist: {
      embed: {
          error: "错误",
          noVoiceChannel: "- 您需要在语音频道中才能使用此命令。",
          playlistNotFound: "- 未找到播放列表。",
          accessDenied: "访问被拒绝",
          noPermission: "- 您没有权限播放此私密播放列表。",
          emptyPlaylist: "- 播放列表为空。",
          playingPlaylist: "正在播放列表！",
          playlistPlaying: "- 播放列表 **{playlistName}** 正在播放。\n- 请使用按钮控制播放",
          errorResolvingSong: "- 解析歌曲时出错。",
          errorPlayingPlaylist: "- 播放列表时发生错误。"
      },
      commandDescription: "输入播放列表名称"
    },
    queue: {
      embed: {
          queueEmpty: "队列为空",
          queueEmptyDescription: "- 当前队列为空。使用 `/play` 命令添加歌曲。",
          currentQueue: "当前队列",
          noMoreSongs: "- 队列中没有更多歌曲。",
          error: "错误",
          errorDescription: "- 获取队列时发生错误。"
      }
    },
    remove: {
      embed: {
          queueEmpty: "队列为空",
          queueEmptyDescription: "- 当前队列为空。使用 `/play` 命令添加歌曲。",
          invalidPosition: "错误",
          invalidPositionDescription: "- 无效的位置。请输入 1 到 {queueLength} 之间的数字。",
          songRemoved: "歌曲已移除",
          songRemovedDescription: "- 已从队列中移除歌曲：**{songTitle}**",
          error: "错误",
          errorDescription: "- 从队列中移除歌曲时发生错误。"
      }
    },
    resume: {
      embed: {
          noActivePlayer: "错误",
          noActivePlayerDescription: "- 未找到活动播放器。",
          resumed: "已恢复！",
          resumedDescription: "**- 播放已恢复！**",
          error: "错误",
          errorDescription: "- 处理您的请求时发生错误。"
      }
    },
    showsongs: {
      embed: {
          error: "错误",
          playlistNotFound: "- 未找到播放列表。",
          accessDenied: "访问被拒绝",
          noPermission: "- 您没有权限查看此私密播放列表。",
          noSongs: "- 此播放列表中没有歌曲。",
          songsInPlaylist: "{playlistName} 中的歌曲",
          songsInPlaylistPage: "{playlistName} 中的歌曲（第 {currentPage}/{totalPages} 页）",
          errorDescription: "- 显示歌曲时发生错误。"
      }
    },
    shuffle: {
      embed: {
          queueEmpty: "队列为空",
          queueEmptyDescription: "- 当前队列为空。使用 `/play` 命令添加歌曲。",
          queueShuffled: "队列已打乱",
          queueShuffledDescription: "- 队列已成功打乱。",
          error: "错误",
          errorDescription: "- 打乱队列时发生错误。"
      }
    },
    skip: {
      embed: {
          noActivePlayer: "错误",
          noActivePlayerDescription: "- 未找到活动播放器。",
          songSkipped: "已跳过歌曲！",
          songSkippedDescription: "**- 播放器将播放下一首歌曲！**",
          error: "错误",
          errorDescription: "- 处理您的请求时发生错误。"
      }
    },
    stop: {
      embed: {
          noActivePlayer: "错误",
          noActivePlayerDescription: "- 未找到活动播放器。",
          musicHalted: "音乐已停止！",
          musicHaltedDescription: "**- 播放已停止并且播放器已销毁！**",
          error: "错误",
          errorDescription: "- 处理您的请求时发生错误。"
      }
    },
    support: {
      embed: {
          authorName: "支持服务器",
          description: "➡️ **加入我们的 Discord 服务器获取支持和更新：**\n- Discord - {supportServerLink}\n\n➡️ **关注我们：**\n- GitHub - {githubLink}\n- Replit - {replitLink}\n- YouTube - {youtubeLink}",
          error: "错误",
          errorDescription: "- 处理您的请求时发生错误。"
      }
    },
    volume: {
      embed: {
          noActivePlayer: "错误",
          noActivePlayerDescription: "- 未找到活动播放器。",
          volumeUpdated: "音量已更新！",
          volumeUpdatedDescription: "- 音量已设置为 **{volume}%**",
          error: "错误",
          errorDescription: "设置音量时发生错误。"
      },
      volumeRangeError: "音量必须在 0 到 100 之间。"
    },
    errors: {
      noPermission: "您没有权限使用此命令。",
      generalError: "- 错误：{error}"
    }
};
