import {exportPath} from './MatchComponentPath';
export const MatchSettingPath = (match, location) => {
	const props = {
		location: location
	}
	return exportPath(props) === 'profile' || exportPath(props) === 'change-password';
}