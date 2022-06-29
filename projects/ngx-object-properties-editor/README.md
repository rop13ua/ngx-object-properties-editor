# Object properties editor

Thes library is a project consisting of a component capable of receiving any object and displaying a form for the modification of its attributes.

Once all the necessary changes have been made, the updated object will be returned to the user.This component has several customization options, explained in later sections.

## Install
Run `npm install ngx-object-properties-editor` to install the npm package containing this library into your project.

## GitHub

This library is hosted in a public GitHub repository that you can access by following this [link](https://github.com/rop13ua/ngx-object-properties-editor). 

In this repository you can see how the library has been developed, as well as a project called "demo" that contains an example of use. In case you have any doubts about how the library works, this project shows the use of all the features provided.

## Basic usage example

First, we should import the library into your application module:
```
import { NgModule } from '@angular/core';
import { NgxObjectPropertiesEditorModule } from '...';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxObjectPropertiesEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

The imported component can then be used anywhere in the application. We will create a view and add it: 
```
<h2>Example:</h2>
<div id="main_container">
	<ngx-object-properties-editor [object]="test" [labels]="labels" [selects]="enums" [hidden]="hidden" theme={{theme}} title={{title}}>
	</ngx-object-properties-editor>
</div>
```

All the input parameters that we can see in the code above have been created previously in the controller. We can see them in the following example:

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor()) {}

  test: any;
  title = 'Example form';
  labels: Map<string,string> = new Map();
  hidden: string[] = [];
  enums: Map<string,any> = new Map();
  theme: string = "dark";

  ngOnInit(): void { 
	enum eyesEnum {"Blue", "Green", "Dark brown", "Light brown", "Black"}
	enum handEnum {"Right-handed", "Left-handed", "Ambidextrous"}

    this.test = {person: {name: "Raquel", surnames: {s1: "Ortega", s2: "Perez"}}, age: 22, eyes: this.EyesEnum['Dark brown'], hands: this.HandsEnum['Right-handed']}
    
    this.enums = new Map().set("eyes",eyesEnum).set("hands", handEnum)

    this.hidden = ["hands"]

    this.labels = new Map().set("name", "Name")
                          .set("s1", "First surname")
                          .set("s2","Second surname")
                          .set("age", "Age")
                          .set("eyes", "Eye color")
                          .set("hands", "Dominant hand")
    
  }
```

With this we will be able to import and run successfully this library.



## Parameters

Here we have a table with all the parameters that we can add to the view component:

| Name     | Description                               | Optional |
|--------------------|:-------------------------------:|:--------:|
| object   | Parameter that receives an object from which the form will be printed.| No |
| labels   | Parameter that receives a map containing the name of the attribute and the title label that you want to be displayed in the form. | Yes |
| selects  | Parameter that receives a map containing the name of the attributes that are of the enumerated type and the enum declaration. This way they will be displayed on the screen using an input of type select or radio. | Yes |
| hidden   | Parameter that receives an array of strings containing the name of the attributes that the user does not want to be displayed on the form. | Yes |
| theme    | Parameter that receives a string containing one of the defined themes. This will change the design of the form | Yes |
| title    | Parameter that receives a string containig a title for the form. | Yes |

## Theming

### Provided Themes

Here we have the themes provided for the component. You can check it's working at the 'Demo' proyect.

| Name     | Description                               |
|--------------------|:-------------------------------:| 
| light    | Simple looking theme. It uses very light colors and a spaced look. |
| dark     | Same theme as the previous one, but with gray and black colors. Very useful not to tire your eyes. |
| muret    | Classic theme which uses blue and green colors and Roboto's font. | 
| custom   | Custom theme that has no CSS inside it. It is intended for the user to use the CSS variables seen in the following section.|


### Theme parameters

If you are looking for further customization, this library offers a custom theme called `custom`. This can be passed by parameter like the ones seen in the previous section. 

To use the custom theme, we have some theme parameters that you will be able to use in order to change the form appearance. Here we have a list with all the parameters:

| Name               |      Use                                       |
|--------------------|:----------------------------------------------:|
| --background-color |  Changes the background color of the component.|
| --color            |  Changes the text color of the component.      |
| --font-family      |  Changes the font family of the component.     |
| --title-color      |  Changes the text color of the title.          |
| --input-container-margin |  Changes the margins of the inputs.      |
| --input-container-margin-top | Changes the top margin of the inputs. This is useful to change the spacing between inputs. |
| --label-font-size  |  Changes the font size of the input labels.    |
| --label-font-weight|  Changes the font weight of the input labels.  |
| --label-color      |  Changes the text color of the input labels.   |
| --label-margin-bottom | Changes the bottom margin of the labels. This is useful to change the spacing between label and input. |
| --input-text-number-border | Changes the border style of the text and number inputs. |
| --input-text-number-width | Changes the width of the text and number inputs. |
| --input-border-radius | Changes the border radius of the text and number inputs. |
| --input-padding    | Changes the padding of the text and number inputs. |
| --input-font-size | Changes the font size of the text and number inputs. |
| --input-background-color | Changes the background color of the text and number inputs. |
| --input-text-color | Changes the text color of the text and number inputs. |
| --input-text-box-shadow | Changes the box shadow of the text and number inputs. |
| --input-radio-color | Changes the text color of the labels next to the radio buttons. |
| --radio-margin-left | Changes the left margin of the radio buttons. This is useful to ident the list of radio buttons inside the form. |
| --radio-margin-top | Changes the top margin of the radio buttons and labels. This is useful to change the spacing between radio buttons. |
| --select-background-color | Changes the background color of the select. |
| --select-box-shadow | Changes the box shadow style of the select. |
| --select-border | Changes the border style of the select. |
| --select-width | Changes the width of the select. |
| --select-border-radius | Changes the border radius of the select. |
| --select-padding | Changes the padding of the select. |
| --select-text-color | Changes the text color of the options inside the select.|

The idea is to create a class inside your CSS that contains the customized parameters, as we can see in the following example:

```
.custom {
    --background-color: green;
	--color: #ffffff;
	--font-family: 'Roboto';
}
```
