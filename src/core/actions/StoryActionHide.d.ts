import StoryAction from './StoryAction';
import { RJSSpriteManagerInterface } from '../../managers/RJSManager';
export default class StoryActionHide extends StoryAction {
    protected params: {
        actor: string;
        manager: RJSSpriteManagerInterface;
        transition: string;
        contAfterTrans: boolean;
    };
    constructor(params: any, game: any);
    execute(): void;
}