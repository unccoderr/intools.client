export const builderProfileList = {
    title: {
        en: 'Builder profile',
        ru: 'Конструктор профиля'
    },
    description: {
        en: 'We will send your post to Instagram at the scheduled time',
        ru: 'Мы отправим ваш пост в Instagram в установленное время'
    },
    button: {
        en: 'Add new',
        ru: 'Создать новый'
    },
    empty_profiles: {
	en: <>
		You haven't created builder before
		<br/>
		Let’s create it!
	</>,
	ru: <>
		Вы ещё не создали ни одного аккаунта
		<br/>
		Давайте создадим его!
	</>
    }
}

export const builderProfileItem = {
    posts: {
        en: 'Posts',
        ru: 'Публикаций'
    },
    followers: {
        en: 'Followers',
        ru: 'Подписчиков'
    },
    following: {
        en: 'Following',
        ru: 'Подписок'
    },
}

export const connectBlock = {
    title: {
        en: 'Connect your Instagram',
        ru: 'Подключите свой Instagram'
    },
    description: {
        en: 'For uploading content and analytics',
        ru: 'Для загрузки постов и аналитики'
    },
    button: {
        en: 'Add account',
        ru: 'Добавить аккаунт'
    }
}

export const greetingBlock = {
    morning: {
        en: 'Good morning',
        ru: 'Доброе утро'
    },
    day: {
        en: 'Good day',
        ru: 'Добрый день'
    },
    evening: {
        en: 'Good evening',
        ru: 'Добрый вечер'
    },
    night: {
        en: 'Good night',
        ru: 'Доброй ночи'
    },
    unauthorized: {
        en: 'Hey, friend',
        ru: 'Привет, друг'
    }
}

export const statsBlock = {
    new_followers: {
        en: 'New followers',
        ru: 'Новые подписчики'
    },
    new_unfollowers: {
        en: 'New unfollowers',
        ru: 'Новые отписчики'
    },
    total_unfollowers: {
        en: 'Unfollowing me',
        ru: 'Отписались от меня'
    },
    total_blocked_me: {
        en: 'Blocked me',
        ru: 'Заблокировали меня'
    },
}

export const subscriptionModal = {
    builder: {
        header: {
            en: 'Profile builder',
            ru: 'Конструктор профиля'
        },
        benefits: [
            {
                en: 'Unlimited number profiles',
                ru: 'Неограниченное число профилей',
            },
            {
                en: 'Export the entire feed photos',
                ru: 'Экспортируйте фотографии своей ленты целиком',
            }
        ]
    },
    planner: {
        header: {
            en: 'Planner',
            ru: 'Планнер'
        },
        benefits: [
            {
                en: 'Unlimited scheduled posts',
                ru: 'Неограниченное количество постов'
            },
        ]
    },
    short_subscription: {
        header: {
            en: '9.99$ / 1 month',
            ru: '9.99$ / 1 месяц'
        },
        description: {
            en: 'First 7 days free. No payment now',
            ru: 'Первые 7 дней бесплатно'
        },
    },
    long_subscription: {
        header: {
            en: '59.99$ / 6 month',
            ru: '59.99$ / 6 месяцев'
        },
        description: {
            en: 'Payment now and enjoying of new possibilities',
            ru: 'Оплати сейчас и пользуйся полными возможностями'
        }
    },
    payment_button: {
        en: 'Try free and subscribe',
        ru: 'Попробуйте бесплатно и подпишитесь'
    },
    cancel_button: {
        en: 'Restore purchase',
        ru: 'Отменить покупку'
    },
    show_by_delay: true,
    delay: 3 * 1000
}

export const postsList = {
    title: {
        en: 'Post planning',
        ru: 'Планирование публикаций'
    },
    tabs: {
        all: {
            en: 'All',
            ru: 'Все'
        },
        scheduled: {
            en: 'Planned',
            ru: 'Запланированные'
        },
        posted: {
            en: 'Posted',
            ru: 'Опубликованные'
        }
    },
    create_button: {
        en: 'Create new',
        ru: 'Создать новый'
    },
    empty_posts: {
        en: <>
            You haven't posted before.
            <br/>
            Let’s create it!
        </>,
        ru: <>
            У вас ещё нет постов
            <br/>
            Давайте запостим что - то!
        </>
    },
	today: {
		en: 'Today',
		ru: 'Сегодня'
	},
	at: {
		en: 'at ',
		ru: ''
	}
}

export const plannerModal = {
	description_input: {
		label: {
			en: 'Description',
			ru: 'Описание'
		},
		placeholder: {
			en: 'Enter text',
			ru: 'Введите текст'
		}
	},
	location_input: {
		en: 'Location',
		ru: 'Место'
	},
	schedule_toggle: {
		en: 'Schedule',
		ru: 'Запланировать'
	},
	date_input: {
		en: 'Date',
		ru: 'Дата'
	},
	button: {
		post: {
			en: 'Post now',
			ru: 'Опубликовать сейчас'
		},
		schedule: {
			en: 'Post on schedule',
			ru: 'Отложить публикацию'
		}
	}
}
