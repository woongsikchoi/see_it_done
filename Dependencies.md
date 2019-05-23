# Project dependencies

No | Project | Description | Dependencies | devDependencies | Total
:----: | -------- | ------------ | :---------------: | :------------: | :-----:
1 | **lamed_core(0.0.6)** | Simple core functions | ---- | ---- | 0 
2 | **lamed_test(2.2.10)** | Mocha unit testing made easy | lamed_core(0.0.6) | ---- | 1 
3 | **lamed_string(1.1.6)** | String functions | lamed_core(0.0.6) | lamed_test(2.2.10) | 2 
4 | **lamed_io(1.1.9)** | IO functions | clipboardy(2.0.0)<br>lamed_core(0.0.6)<br>lamed_string(1.1.6)<br>node-localstorage(1.3.1)<br>readline(1.3.0) | lamed_test(2.2.10) | 6 
5 | **lamed_folder(1.2.11)** | Folder searching | lamed_io(1.1.9)<br>lamed_string(1.1.6)<br>lamed_test(2.2.10) | ---- | 3 
6 | **lamed_flowchart(1.0.21)** | Markdown flowcharts | lamed_folder(1.2.11)<br>lamed_io(1.1.9)<br>lamed_string(1.1.6)<br>lamed_test(2.2.10)<br>lodash(4.17.11) | babel-core(6.26.3)<br>babel-loader(8.0.6)<br>babel-preset-env(1.7.0)<br>chalk(2.4.2)<br>expect(24.8.0)<br>html-entities(1.2.1)<br>opn(6.0.0)<br>uglifyjs-webpack-plugin(2.1.3)<br>webpack(4.32.2)<br>webpack-cli(3.3.2)<br>webpack-strip-block(0.2.0) | 16 
7 | **lamed_floweditor(1.0.9)** | Markdown flowchart editor | commander(2.20.0)<br>html-entities(1.2.1)<br>lamed_flowchart(1.0.21)<br>lamed_folder(1.2.11)<br>lamed_io(1.1.9)<br>lamed_test(2.2.10)<br>lodash(4.17.11)<br>opn(6.0.0) | expect(24.8.0) | 9 
8 | **lamed_learn(1.0.10)** | Learning through code templates | camelcase(5.3.1)<br>chalk(2.4.2)<br>commander(2.20.0)<br>copy-paste(1.3.0)<br>lamed_folder(1.2.11)<br>lamed_io(1.1.9)<br>lamed_string(1.1.6)<br>lamed_test(2.2.10)<br>lodash(4.17.11)<br>node-cmd(3.0.0)<br>node-localstorage(1.3.1)<br>node-run-cmd(1.0.1)<br>opn(6.0.0)<br>recursive-readdir(2.2.2)<br>title-case(2.1.1) | assert(2.0.0)<br>expect(24.8.0) | 17 
9 | **see_it_done(0.0.24)** | Agile project template | lamed_io(1.1.9)<br>lamed_string(1.1.6)<br>lamed_folder(1.2.11) | lamed_test(2.2.10) | 4 
10 | **lamed_markdown(0.0.6)** | lamed_markdown template project | ---- | lamed_test(2.2.10) | 1 
11 | **see_it_start(0.0.23)** | CI Project template | ---- | lamed_test(2.2.10) | 1 
12 | **lamed_name(0.0.2)** | Naming of files | lamed_string(1.1.6) | lamed_test(2.2.10) | 2 

## Excluded dependencies

- babel-eslint
- mocha
- snazzy
- standard
- codecov
- nyc
