import {Window} from "./core/ui"
import { Text } from "./core/ui";
import {Button} from "./widgets/button"
import {CheckBox} from "./widgets/checkbox";
import {Heading} from "./widgets/heading"


let w = new Window(window.innerHeight-10,'100%');

let lbl1= new Heading(w);
lbl1.text = "Button Demo";
lbl1.tabindex = 1;
lbl1.fontSize = 16;
lbl1.move(10,20);

let btn = new Button(w);
btn.text = "Button";
btn.backcolor = "#3D2B56"
btn.tabindex = 2;
btn.fontSize = 14
btn.move(12, 50)

let lbl2 = new Heading(w);
lbl2.text = "Checkbox Demo";
lbl2.tabindex = 1;
lbl2.fontSize = 16;
lbl2.move(10, 170)

let chkbx1 = new CheckBox(w);
chkbx1.backcolor = "white";
chkbx1.tabindex = 2;
chkbx1.fontSize = 14
chkbx1.move(12, 200)

let header_state = false
btn.onClick(
    () =>
    lbl1.text = "Button Clicked!"
)
