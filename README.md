# Object properties editor

This repo contains two separated projects:

- demo: Demonstration project containing an example of use. It shows all the features and functionalities of the library and how to use them. 
- ngx-object-properties-editor: Project containing library.

Thes library is a project consisting of a component capable of receiving any object and displaying a form for the modification of its attributes.

Once all the necessary changes have been made, the updated object will be returned to the user.This component has several customization options, explained in later sections.

## Build

Run `ng build ngx-ob-editor` to build the Sheet Editor library needed in the DEMO application and test how it works.

If you want to build and uptdate the changes made in the library project automatically use `ng build ngx-object-properties-editor --watch` instead.


## Running unit tests

Run `ng test ngx-object-properties-editor` to execute the library project unit tests via [Karma](https://karma-runner.github.io).
Run `ng test demo` to execute the demo project unit tests via [Karma](https://karma-runner.github.io).

## Install
Run `npm install @rop13ua\ngx-object-properties-editor` to install the npm package containing this library into your project.

## Run project

Run `ng serve` to start the DEMO project. You can access to it going to [http://localhost:4200/](http://localhost:4200/)

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
