# Project dependencies

No | Project | Description | Dependencies | devDependencies | Total
:----: | -------- | ------------ | :---------------: | :------------: | :-----:
1 | **lamed_core <br> [![npm](https://img.shields.io/npm/v/lamed_core.svg)](https://www.npmjs.org/package/lamed_core)** | Simple core functions | ---- | ---- | 0
2 | **lamed_test <br> [![npm](https://img.shields.io/npm/v/lamed_test.svg)](https://www.npmjs.org/package/lamed_test)** | Mocha unit testing made easy | lamed_core(0.0.7) | ---- | 1
3 | **lamed_string <br> [![npm](https://img.shields.io/npm/v/lamed_string.svg)](https://www.npmjs.org/package/lamed_string)** | String functions | lamed_core(0.0.7) | lamed_test(2.2.12) | 2
4 | **lamed_io <br> [![npm](https://img.shields.io/npm/v/lamed_io.svg)](https://www.npmjs.org/package/lamed_io)** | IO functions | clipboardy(2.0.0)<br>lamed_core(0.0.7)<br>lamed_string(1.1.7)<br>node-localstorage(1.3.1)<br>readline(1.3.0) | lamed_test(2.2.12) | 6
5 | **lamed_folder <br> [![npm](https://img.shields.io/npm/v/lamed_folder.svg)](https://www.npmjs.org/package/lamed_folder)** | Folder searching | lamed_io(1.1.10)<br>lamed_string(1.1.7)<br>lamed_test(2.2.12) | ---- | 3
6 | **lamed_vscode <br> [![npm](https://img.shields.io/npm/v/lamed_vscode.svg)](https://www.npmjs.org/package/lamed_vscode)** | MS code functions | lamed_folder(1.2.13)<br>lamed_io(1.1.10)<br>node-run-cmd(1.0.1) | lamed_test(2.2.12) | 4
7 | **lamed_markdown <br> [![npm](https://img.shields.io/npm/v/lamed_markdown.svg)](https://www.npmjs.org/package/lamed_markdown)** | lamed_markdown template project | ---- | lamed_test(2.2.12) | 1
8 | **lamed_name <br> [![npm](https://img.shields.io/npm/v/lamed_name.svg)](https://www.npmjs.org/package/lamed_name)** | Naming of files | lamed_string(1.1.7) | lamed_test(2.2.12) | 2
9 | **lamed_flowchart <br> [![npm](https://img.shields.io/npm/v/lamed_flowchart.svg)](https://www.npmjs.org/package/lamed_flowchart)** | Markdown flowcharts | lamed_folder(1.2.12)<br>lamed_io(1.1.10)<br>lamed_string(1.1.7)<br>lamed_test(2.2.12)<br>lodash(4.17.11) | babel-core(6.26.3)<br>babel-loader(8.0.6)<br>babel-preset-env(1.7.0)<br>chalk(2.4.2)<br>expect(24.8.0)<br>html-entities(1.2.1)<br>opn(6.0.0)<br>uglifyjs-webpack-plugin(2.1.3)<br>webpack(4.32.2)<br>webpack-cli(3.3.2)<br>webpack-strip-block(0.2.0) | 16
10 | **lamed_floweditor <br> [![npm](https://img.shields.io/npm/v/lamed_floweditor.svg)](https://www.npmjs.org/package/lamed_floweditor)** | Markdown flowchart editor | commander(2.20.0)<br>html-entities(1.2.1)<br>lamed_flowchart(1.0.22)<br>lamed_folder(1.2.13)<br>lamed_io(1.1.10)<br>lamed_test(2.2.12)<br>lodash(4.17.11)<br>opn(6.0.0) | expect(24.8.0) | 9
11 | **lamed_learn <br> [![npm](https://img.shields.io/npm/v/lamed_learn.svg)](https://www.npmjs.org/package/lamed_learn)** | Learning through code templates | camelcase(5.3.1)<br>chalk(2.4.2)<br>commander(2.20.0)<br>copy-paste(1.3.0)<br>lamed_folder(1.2.13)<br>lamed_io(1.1.10)<br>lamed_name(0.0.4)<br>lamed_string(1.1.7)<br>lamed_test(2.2.12)<br>lodash(4.17.11)<br>node-cmd(3.0.0)<br>node-localstorage(1.3.1)<br>node-run-cmd(1.0.1)<br>opn(6.0.0)<br>recursive-readdir(2.2.2)<br>title-case(2.1.1) | assert(2.0.0)<br>expect(24.8.0) | 18
12 | **see_it_done <br> [![npm](https://img.shields.io/npm/v/see_it_done.svg)](https://www.npmjs.org/package/see_it_done)** | Agile project template | lamed_io(1.1.10)<br>lamed_string(1.1.7)<br>lamed_folder(1.2.13) | lamed_test(2.2.12) | 4
13 | **see_it_start <br> [![npm](https://img.shields.io/npm/v/see_it_start.svg)](https://www.npmjs.org/package/see_it_start)** | CI Project template | ---- | lamed_test(2.2.12) | 1

## Excluded dependencies

- babel-eslint
- mocha
- snazzy
- standard
- codecov
- nyc
