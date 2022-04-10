const IG_CLIENT_ID = 2909512266030441
const IG_REDIRECT_URL = 'https://intools.app/'
export const IG_AUTH_URL = `https://api.instagram.com/oauth/authorize?client_id=${IG_CLIENT_ID}&redirect_uri=${IG_REDIRECT_URL}&scope=user_profile,user_media&response_type=code`

export const CLIENT_URL = 'http://localhost:3000'
export const API_URL = 'http://localhost:5000'

export const DATA_KEYS = {
	CLOSED_BUILDER_MODAL: 'cl-b-m',
	CLOSED_SUBSCRIPTION_MODEL: 'cl-s-m',
	BUILDER_PROFILES_LIST: 'b-p-l'
}

export const IPINFO_TOKEN = 'ee1a77709cfcb7'

export * from './indexScreen--config'
export * from './authScreen--config'
export * from './builderScreen--config'
export * from './header--config'