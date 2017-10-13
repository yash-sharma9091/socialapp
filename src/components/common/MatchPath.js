import {exportPath} from './MatchComponentPath';
export const MatchSettingsPath = (match, location) => {
	const props = {
		location: location
	}
	return exportPath(props) === 'profile' || exportPath(props) === 'change-password';
}

export const MatchProfilePath = (match, location) => {
	const props = {
		location: location
	}
	return exportPath(props) === 'profile';
}

export const MatchChangePasswordPath = (match, location) => {
	const props = {
		location: location
	}
	return exportPath(props) === 'change-password';
}

export const MatchDashboardPath = (match, location) => {
	const props = {
		location: location
	}
	return exportPath(props) === 'dashboard' || exportPath(props) === 'client-list';
}