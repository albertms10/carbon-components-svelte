/// <reference types="svelte" />

type Files = string[];

export interface FileUploaderButtonProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["input"]> {
  /**
   * Specify the accepted file types
   * @default []
   */
  accept?: Files;

  /**
   * Set to `true` to allow multiple files
   * @default false
   */
  multiple?: boolean;

  /**
   * Set to `true` to disable the input
   * @default false
   */
  disabled?: boolean;

  /**
   * Set to `true` to disable label changes
   * @default false
   */
  disableLabelChanges?: boolean;

  /**
   * Specify the kind of file uploader button
   * @default "primary"
   */
  kind?: "primary" | "secondary" | "tertiary" | "ghost" | "danger";

  /**
   * Specify the label text
   * @default "Add file"
   */
  labelText?: string;

  /**
   * Specify the label role
   * @default "button"
   */
  role?: string;

  /**
   * Specify `tabindex` attribute
   * @default "0"
   */
  tabindex?: string;

  /**
   * Set an id for the input element
   * @default "ccs-" + Math.random().toString(36)
   */
  id?: string;

  /**
   * Specify a name attribute for the input
   * @default ""
   */
  name?: string;

  /**
   * Obtain a reference to the input HTML element
   * @default null
   */
  ref?: null | HTMLInputElement;
}

export default class FileUploaderButton {
  $$prop_def: FileUploaderButtonProps;
  $$slot_def: {};

  $on(eventname: "keydown", cb: (event: WindowEventMap["keydown"]) => void): () => void;
  $on(eventname: "change", cb: (event: WindowEventMap["change"]) => void): () => void;
  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
