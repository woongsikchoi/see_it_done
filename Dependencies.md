# Project dependencies

No | Project | Description | Dependencies | devDependencies | Total
:----: | -------- | ------------ | :---------------: | :------------: | :-----:
1 | **lamed_core <br> [![npm](https://img.shields.io/npm/v/lamed_core.svg)](https://www.npmjs.org/package/lamed_core)** | Simple core functions | ---- | ---- | 0
2 | **lamed_test <br> [![npm](https://img.shields.io/npm/v/lamed_test.svg)](https://www.npmjs.org/package/lamed_test)** | Mocha unit testing made easy | chalk(2.4.2)<br>lamed_core(1.0.3) | ---- | 2
3 | **lamed_string <br> [![npm](https://img.shields.io/npm/v/lamed_string.svg)](https://www.npmjs.org/package/lamed_string)** | String functions | lamed_core(1.0.3) | lamed_test(2.2.24) | 2
4 | **lamed_io <br> [![npm](https://img.shields.io/npm/v/lamed_io.svg)](https://www.npmjs.org/package/lamed_io)** | IO functions | clipboardy(2.0.0)<br>filenamify(4.1.0)<br>lamed_core(1.0.3)<br>lamed_string(1.1.16)<br>lamed_test(2.2.24)<br>lodash.uniq(4.5.0)<br>node-localstorage(1.3.1)<br>readline(1.3.0)<br>valid-filename(3.1.0) | ---- | 9
5 | **lamed_name <br> [![npm](https://img.shields.io/npm/v/lamed_name.svg)](https://www.npmjs.org/package/lamed_name)** | Naming of files | lamed_string(1.1.17) | lamed_test(2.2.25) | 2
6 | **lamed_folder <br> [![npm](https://img.shields.io/npm/v/lamed_folder.svg)](https://www.npmjs.org/package/lamed_folder)** | Folder searching | lamed_io(1.1.20)<br>lamed_string(1.1.16)<br>lamed_test(2.2.24) | ---- | 3
7 | **lamed_vscode <br> [![npm](https://img.shields.io/npm/v/lamed_vscode.svg)](https://www.npmjs.org/package/lamed_vscode)** | MS code functions | lamed_folder(1.2.24)<br>lamed_io(1.1.20)<br>lamed_name(1.0.2)<br>node-run-cmd(1.0.1) | lamed_test(2.2.24) | 5
8 | **lamed_markdown <br> [![npm](https://img.shields.io/npm/v/lamed_markdown.svg)](https://www.npmjs.org/package/lamed_markdown)** | lamed_markdown template project | ---- | lamed_test(2.2.24) | 1
9 | **lamed_flowchart <br> [![npm](https://img.shields.io/npm/v/lamed_flowchart.svg)](https://www.npmjs.org/package/lamed_flowchart)** | Markdown flowcharts | lamed_folder(1.2.24)<br>lamed_io(1.1.20)<br>lamed_string(1.1.16)<br>lamed_test(2.2.24) | expect(24.8.0)<br>html-entities(1.2.1)<br>opn(6.0.0)<br>uglifyjs-webpack-plugin(2.1.3)<br>webpack(4.33.0)<br>webpack-cli(3.3.3)<br>webpack-strip-block(0.2.0) | 11
10 | **lamed_floweditor <br> [![npm](https://img.shields.io/npm/v/lamed_floweditor.svg)](https://www.npmjs.org/package/lamed_floweditor)** | Markdown flowchart editor | commander(2.20.0)<br>html-entities(1.2.1)<br>lamed_flowchart(1.0.30)<br>lamed_test(2.2.24)<br>lodash.findindex(4.6.0)<br>opn(6.0.0) | expect(24.8.0) | 7
11 | **lamed_learn <br> [![npm](https://img.shields.io/npm/v/lamed_learn.svg)](https://www.npmjs.org/package/lamed_learn)** | Learning through code templates | camelcase(5.3.1)<br>chalk(2.4.2)<br>commander(2.20.0)<br>copy-paste(1.3.0)<br>lamed_folder(1.2.24)<br>lamed_io(1.1.20)<br>lamed_name(1.0.2)<br>lamed_string(1.1.16)<br>lamed_test(2.2.24)<br>lamed_vscode(0.0.18)<br>lodash.filter(4.6.0)<br>lodash.sortby(4.7.0)<br>lodash.uniq(4.5.0)<br>node-cmd(3.0.0)<br>node-localstorage(1.3.1)<br>node-run-cmd(1.0.1)<br>opn(6.0.0)<br>recursive-readdir(2.2.2)<br>title-case(2.1.1) | ---- | 19
12 | **see_it_done <br> [![npm](https://img.shields.io/npm/v/see_it_done.svg)](https://www.npmjs.org/package/see_it_done)** | Agile project template | lamed_test(2.2.24)<br>lamed_string(1.1.16)<br>lamed_folder(1.2.24)<br>lamed_io(1.1.20) | ---- | 4
13 | **see_it_start <br> [![npm](https://img.shields.io/npm/v/see_it_start.svg)](https://www.npmjs.org/package/see_it_start)** | CI Project template | ---- | lamed_test(2.2.24) | 1

## Excluded dependencies

- babel-eslint
- mocha
- snazzy
- standard
- codecov
- nyc
- [Dashboard](./Dashboard.md),
- [Dependencies](./Dependencies.md) and
- [User stories](./UserStories.md)