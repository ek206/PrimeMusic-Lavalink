module.exports = {
    footer: "SSRR تم التطوير بواسطة | Prime Music v1.2",
    ping: {
      description: "فحص تأخير البوت",
      response: "جاري قياس التأخير...",
      embed: {
        title: "تأخير البوت",
        responseTime: "- وقت استجابة البوت: **{latency}ms**",
        websocketPing: "- تأخير WebSocket: **{ping}ms**",
        uptime: "- مدة التشغيل: **{uptime}**",
        footer: "code scripts تم التطوير بواسطة | Prime Music v1.2"
      }
    },
    addsong: {
      embed: {
          playlistNotFound: "قائمة التشغيل غير موجودة",
          playlistNotFoundDescription: "- قائمة التشغيل غير موجودة.",
          accessDenied: "تم رفض الوصول",
          accessDeniedDescription: "- ليس لديك صلاحية لإضافة أغاني إلى قائمة التشغيل هذه.",
          songAdded: "تمت إضافة الأغنية",
          songAddedDescription: "- تمت إضافة الأغنية **{songInput}** إلى قائمة التشغيل **{playlistName}**.",
          error: "خطأ",
          errorDescription: "- حدث خطأ أثناء إضافة الأغنية."
      }
    },
    allplaylists: {
      embed: {
          noPlaylistsFound: "لم يتم العثور على قوائم تشغيل",
          noPlaylistsFoundDescription: "- لا توجد قوائم تشغيل عامة متاحة حالياً.",
          createdBy: "تم الإنشاء بواسطة: {userId}",
          serverName: "السيرفر: {serverName}",
          songs: "الأغاني: **{songCount}**",
          publicPlaylistsTitle: "قوائم التشغيل العامة (صفحة {currentPage}/{totalPages})",
          error: "خطأ",
          errorDescription: "- حدث خطأ أثناء جلب قوائم التشغيل."
      }
    },
    autoplay: {
      embed: {
          autoplayUpdated: "تم تحديث التشغيل التلقائي",
          autoplayStatus: "- تم **{status}** التشغيل التلقائي لهذا السيرفر.",
          enabled: "تفعيل",
          disabled: "تعطيل",
          error: "خطأ",
          errorDescription: "- حدث خطأ أثناء تحديث التشغيل التلقائي."
      },
      commandDescription: "تفعيل أو تعطيل التشغيل التلقائي"
    },
    createplaylist: {
      embed: {
          playlistExists: "قائمة التشغيل موجودة",
          playlistExistsDescription: "- قائمة تشغيل بهذا الاسم موجودة بالفعل.",
          playlistCreated: "تم إنشاء قائمة التشغيل",
          playlistCreatedDescription: "- تم إنشاء قائمة التشغيل **{playlistName}**.\n- الخصوصية: **{visibility}**.",
          private: "خاص",
          public: "عام",
          error: "خطأ",
          errorDescription: "- حدث خطأ أثناء إنشاء قائمة التشغيل."
      },
      commandDescriptionName: "أدخل اسم قائمة التشغيل",
      commandDescriptionPrivate: "اجعل قائمة التشغيل خاصة (مرئية لك فقط)"
    },
    deleteplaylist: {
      embed: {
          playlistNotFound: "قائمة التشغيل غير موجودة",
          playlistNotFoundDescription: "- قائمة التشغيل غير موجودة.",
          accessDenied: "تم رفض الوصول",
          accessDeniedDescription: "- ليس لديك صلاحية لحذف قائمة التشغيل هذه.",
          playlistDeleted: "تم حذف قائمة التشغيل",
          playlistDeletedDescription: "- تم حذف قائمة التشغيل **{playlistName}**.",
          error: "خطأ",
          errorDescription: "- حدث خطأ أثناء حذف قائمة التشغيل."
      },
      commandDescriptionName: "أدخل اسم قائمة التشغيل"
    },
    deletesong: {
      embed: {
          playlistNotFound: "قائمة التشغيل غير موجودة",
          playlistNotFoundDescription: "- قائمة التشغيل غير موجودة.",
          songDeleted: "تم حذف الأغنية",
          songDeletedDescription: "- تم حذف الأغنية **{songName}** من قائمة التشغيل **{playlistName}**.",
          error: "خطأ",
          errorDescription: "- حدث خطأ أثناء حذف الأغنية."
      },
      commandDescriptionPlaylist: "أدخل اسم قائمة التشغيل",
      commandDescriptionSong: "أدخل اسم الأغنية"
    },
    filters: {
      embed: {
          error: "خطأ",
          noPlayer: "- لم يتم العثور على مشغل نشط. يرجى تشغيل أغنية أولاً.",
          wrongChannel: "- يجب أن تكون في نفس القناة الصوتية مع البوت لاستخدام هذا الأمر.",
          filtersCleared: "تم مسح جميع الفلاتر.",
          invalidFilter: "تم اختيار فلتر غير صالح.",
          filterApplied: "تم تطبيق الفلتر **{filter}**.",
          errorProcessing: "- حدث خطأ أثناء معالجة طلبك."
      },
      commandDescription: "اختر فلتر للتطبيق"
    },
    help: {
      embed: {
          title: "📜 قائمة مساعدة {botName}",
          author: "المساعدة",
          description: `
          **مرحباً بك في {botName}!**

          > رفيقك الموسيقي المثالي في ديسكورد.
          > معلومات تفصيلية عن البوت:
                  
          **📂 الأوامر:** {totalCommands}
          **🌐 السيرفرات:** {totalServers}
          **👥 المستخدمين:** {totalUsers}
          **⏳ مدة التشغيل:** {uptimeString}
          **📡 التأخير:** {ping}ms
          `,
          availableCommands: "الأوامر المتاحة",
          noDescription: "لا يوجد وصف متاح.",
          noCommands: "لم يتم العثور على أوامر.",
          error: "❌ حدث خطأ أثناء جلب قائمة المساعدة."
      },
      commandDescription: "الحصول على معلومات عن البوت"
    },
    myplaylists: {
      embed: {
          noPlaylistsFound: "لم يتم العثور على قوائم تشغيل",
          noPlaylistsFoundDescription: "- لم تقم بإنشاء أي قوائم تشغيل بعد.",
          yourPlaylistsTitle: "قوائم التشغيل الخاصة بك (صفحة {currentPage}/{totalPages})",
          visibility: "الخصوصية",
          private: "خاص",
          public: "عام",
          server: "السيرفر",
          songs: "الأغاني",
          error: "خطأ",
          errorDescription: "- حدث خطأ أثناء جلب قوائم التشغيل الخاصة بك."
      }
    },
    nowPlaying: {
      embed: {
          error: "خطأ",
          noSong: "- لا توجد أغنية قيد التشغيل حالياً.",
          nowPlaying: "قيد التشغيل الآن!",
          errorDescription: "- حدث خطأ أثناء معالجة طلبك."
      }
    },
    pause: {
      embed: {
          error: "خطأ",
          noActivePlayer: "- لم يتم العثور على مشغل نشط.",
          paused: "تم الإيقاف المؤقت!",
          pausedDescription: "**- تم إيقاف التشغيل مؤقتاً!**",
          errorDescription: "- حدث خطأ أثناء معالجة طلبك."
      }
    },
    play: {
      embed: {
          error: "خطأ",
          noVoiceChannel: "- يجب أن تكون في قناة صوتية لاستخدام هذا الأمر.",
          noLavalinkNodes: "- لا توجد عقد Lavalink متاحة لمعالجة الطلب.",
          noResults: "- لم يتم العثور على نتائج.",
          requestUpdated: "تم تحديث الطلب!",
          successProcessed: "- تمت معالجة طلبك بنجاح.\n- يرجى استخدام الأزرار للتحكم في التشغيل",
          errorProcessing: "- حدث خطأ أثناء معالجة طلبك."
      },
      commandDescription: "أدخل اسم الأغنية / الرابط أو قائمة التشغيل"
    },
    playCustomPlaylist: {
      embed: {
          error: "خطأ",
          noVoiceChannel: "- يجب أن تكون في قناة صوتية لاستخدام هذا الأمر.",
          playlistNotFound: "- قائمة التشغيل غير موجودة.",
          accessDenied: "تم رفض الوصول",
          noPermission: "- ليس لديك صلاحية لتشغيل قائمة التشغيل الخاصة هذه.",
          emptyPlaylist: "- قائمة التشغيل فارغة.",
          playingPlaylist: "جاري تشغيل قائمة التشغيل!",
          playlistPlaying: "- قائمة التشغيل **{playlistName}** قيد التشغيل.\n- يرجى استخدام الأزرار للتحكم في التشغيل",
          errorResolvingSong: "- خطأ في معالجة الأغنية.",
          errorPlayingPlaylist: "- حدث خطأ أثناء تشغيل قائمة التشغيل."
      },
      commandDescription: "أدخل اسم قائمة التشغيل"
    },
    queue: {
      embed: {
          queueEmpty: "قائمة الانتظار فارغة",
          queueEmptyDescription: "- قائمة الانتظار فارغة حالياً. أضف أغاني باستخدام الأمر `/play`.",
          currentQueue: "قائمة الانتظار الحالية",
          noMoreSongs: "- لا توجد المزيد من الأغاني في قائمة الانتظار.",
          error: "خطأ",
          errorDescription: "- حدث خطأ أثناء جلب قائمة الانتظار."
      }
    },
    remove: {
      embed: {
          queueEmpty: "قائمة الانتظار فارغة",
          queueEmptyDescription: "- قائمة الانتظار فارغة حالياً. أضف أغاني باستخدام الأمر `/play`.",
          invalidPosition: "خطأ",
          invalidPositionDescription: "- موقع غير صالح. أدخل رقماً بين 1 و {queueLength}.",
          songRemoved: "تم إزالة الأغنية",
          songRemovedDescription: "- تم إزالة الأغنية من قائمة الانتظار: **{songTitle}**",
          error: "خطأ",
          errorDescription: "- حدث خطأ أثناء إزالة الأغنية من قائمة الانتظار."
      }
    },
    resume: {
      embed: {
          noActivePlayer: "خطأ",
          noActivePlayerDescription: "- لم يتم العثور على مشغل نشط.",
          resumed: "تم استئناف التشغيل!",
          resumedDescription: "**- تم استئناف التشغيل!**",
          error: "خطأ",
          errorDescription: "- حدث خطأ أثناء معالجة طلبك."
      }
    },
    showsongs: {
      embed: {
          error: "خطأ",
          playlistNotFound: "- قائمة التشغيل غير موجودة.",
          accessDenied: "تم رفض الوصول",
          noPermission: "- ليس لديك صلاحية لعرض قائمة التشغيل الخاصة هذه.",
          noSongs: "- لا توجد أغاني في قائمة التشغيل هذه.",
          songsInPlaylist: "الأغاني في {playlistName}",
          songsInPlaylistPage: "الأغاني في {playlistName} (صفحة {currentPage}/{totalPages})",
          errorDescription: "- حدث خطأ أثناء عرض الأغاني."
      }
    },
    shuffle: {
      embed: {
          queueEmpty: "قائمة الانتظار فارغة",
          queueEmptyDescription: "- قائمة الانتظار فارغة حالياً. أضف أغاني باستخدام الأمر `/play`.",
          queueShuffled: "تم خلط قائمة الانتظار",
          queueShuffledDescription: "- تم خلط قائمة الانتظار بنجاح.",
          error: "خطأ",
          errorDescription: "- حدث خطأ أثناء خلط قائمة الانتظار."
      }
    },
    skip: {
      embed: {
          noActivePlayer: "خطأ",
          noActivePlayerDescription: "- لم يتم العثور على مشغل نشط.",
          songSkipped: "تم تخطي الأغنية!",
          songSkippedDescription: "**- سيقوم المشغل بتشغيل الأغنية التالية!**",
          error: "خطأ",
          errorDescription: "- حدث خطأ أثناء معالجة طلبك."
      }
    },
    stop: {
      embed: {
          noActivePlayer: "خطأ",
          noActivePlayerDescription: "- لم يتم العثور على مشغل نشط.",
          musicHalted: "تم إيقاف الموسيقى!",
          musicHaltedDescription: "**- تم إيقاف التشغيل وإغلاق المشغل!**",
          error: "خطأ",
          errorDescription: "- حدث خطأ أثناء معالجة طلبك."
      }
    },
    support: {
      embed: {
          authorName: "سيرفر الدعم",
          description: "➡️ **انضم إلى سيرفر Discord للدعم والتحديثات:**\n- Discord - {supportServerLink}\n\n➡️ **تابعنا على:**\n- GitHub - {githubLink}\n- Replit - {replitLink}\n- YouTube - {youtubeLink}",
          error: "خطأ",
          errorDescription: "- حدث خطأ أثناء معالجة طلبك."
      }
    },
    volume: {
      embed: {
          noActivePlayer: "خطأ",
          noActivePlayerDescription: "- لم يتم العثور على مشغل نشط.",
          volumeUpdated: "تم تحديث مستوى الصوت!",
          volumeUpdatedDescription: "- تم ضبط مستوى الصوت على **{volume}%**",
          error: "خطأ",
          errorDescription: "حدث خطأ أثناء ضبط مستوى الصوت."
      },
      volumeRangeError: "يجب أن يكون مستوى الصوت بين 0 و 100."
    },
    errors: {
      noPermission: "ليس لديك صلاحية لاستخدام هذا الأمر.",
      generalError: "- خطأ: {error}"
    }
};
