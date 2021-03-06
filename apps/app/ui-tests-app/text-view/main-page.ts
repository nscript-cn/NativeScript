import { EventData } from "tns-core-modules/data/observable";
import { SubMainPageViewModel } from "../sub-main-page-view-model";
import { WrapLayout } from "tns-core-modules/ui/layouts/wrap-layout";
import { Page } from "tns-core-modules/ui/page";

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
    const wrapLayout = <WrapLayout>page.getViewById("wrapLayoutWithExamples");
    page.bindingContext = new SubMainPageViewModel(wrapLayout, loadExamples());
}

export function loadExamples() {
    const examples = new Map<string, string>();
    examples.set("text-view-border", "text-view/text-view-border");
    examples.set("text-view-hint-color", "text-view/text-view-hint-color");
    examples.set("hint-text-color", "text-view/hint-text-color");
    examples.set("scrolling-and-sizing", "text-view/scrolling-and-sizing");
    return examples;
}