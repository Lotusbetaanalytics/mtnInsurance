import * as React from "react";
import { IMyModalPopupProps } from "../IMyModalPopupProps";
interface IPopupState {
  callchildcomponent: boolean;
}
import { DefaultButton } from "@fluentui/react/lib/Button";
import { MYModal } from "./MYModal";
export default class MyModalPopup extends React.Component<
  IMyModalPopupProps,
  IPopupState
> {
  constructor(props: IMyModalPopupProps, state: IPopupState) {
    super(props);
    this.state = {
      callchildcomponent: false,
    };
    this.handler = this.handler.bind(this);
    this.Buttonclick = this.Buttonclick.bind(this);
  }
  handler() {
    this.setState({
      callchildcomponent: false,
    });
  }
  private Buttonclick(e) {
    e.preventDefault();

    this.setState({ callchildcomponent: true });
  }
  public render(): React.ReactElement<IMyModalPopupProps> {
    return (
      <div>
        <DefaultButton onClick={(e) => this.Buttonclick(e)} text="Open Modal" />
        {this.state.callchildcomponent && (
          <MYModal myprops={this.state} handler={this.handler} />
        )}
      </div>
    );
  }
}
