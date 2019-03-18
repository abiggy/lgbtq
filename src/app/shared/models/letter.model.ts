import { Definition } from "./definition.model";
import { Link } from "./link.model";
export class Letter {
  character: string;
  color: string;
  flag: string;
  title: string;
  definitions: Array<Definition>;
  definitionSource: Link;
}
