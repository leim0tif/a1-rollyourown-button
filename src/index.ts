import {Window} from "./core/ui"
import {Heading} from "./widgets/heading"
import {Button} from "./widgets/button"
import {CheckBox} from "./widgets/checkbox"
import {RadioGroup} from "./widgets/radiogroup"
import { RadioButton } from "./widgets/radiobutton"


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

let header_state = false
btn.onClick(
    () =>
    lbl1.text = "Button Clicked!"
)

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

let lbl3 = new Heading(w);
lbl3.text = "Radio Buton Demo";
lbl3.tabindex = 1;
lbl3.fontSize = 16;
lbl3.move(10, 320)

let radios = new RadioGroup(w);
let radio1 = new RadioButton(w, radios);
radio1.move(10, 350)
let radio2 = new RadioButton(w, radios);
radio2.move(10, 370)
let radio3 = new RadioButton(w, radios);
radio3.move(10, 390)
radios.add_button(radio1);
radios.add_button(radio2);
radios.add_button(radio3);
