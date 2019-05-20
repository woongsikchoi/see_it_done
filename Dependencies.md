# Project dependencies

No | Project | Description | Dependencies | devDependencies | Total
:----: | -------- | ------------ | :---------------: | :------------: | :-----:
1 | **lamed_core(0.0.1)** | lamed_core template project | ---- | lamed_folder(1.2.6)<br>expect(24.8.0)<br>lamed_io(1.0.21)<br>lamed_test(2.2.4)<br>see_it_done(*) | 5 
2 | **lamed_test(2.2.7)** | Useful JavaScript functions to improve testing | lamed_string(1.1.1) | expect(24.8.0)<br>lamed_io(1.0.21)<br>lamed_test(2.2.4)<br>see_it_done(*) | 5 
3 | **lamed_string(1.1.1)** | As a JavaScript developer I want to manage string function in one place so that it I can reap the benefit in all projects. | ---- | lamed_io(1.1.5)<br>lamed_test(2.2.7)<br>expect(24.8.0)<br>see_it_done(*) | 4 
4 | **lamed_io(1.1.5)** | Useful io functions | clipboardy(2.0.0)<br>lamed_string(1.1.1)<br>lamed_test(2.2.7)<br>node-localstorage(1.3.1)<br>readline(1.3.0) | expect(24.8.0)<br>lamed_io(1.0.21)<br>lamed_test(2.2.4)<br>see_it_done(*) | 9 
5 | **lamed_folder(1.2.6)** | Working with folder methods | lamed_string(1.1.1)<br>lamed_test(2.2.7) | lamed_io(1.1.5)<br>lamed_test(2.2.4)<br>expect(24.7.1)<br>see_it_done(*) | 6 
6 | **lamed_flowchart(1.0.15)** | Simple flowcharting | lamed_folder(1.2.6)<br>lamed_io(1.1.5)<br>lamed_string(1.1.1)<br>lamed_test(2.2.7)<br>lodash(4.17.11) | babel-core(6.26.3)<br>babel-loader(8.0.6)<br>babel-preset-env(1.7.0)<br>chalk(2.4.2)<br>expect(24.8.0)<br>html-entities(1.2.1)<br>opn(6.0.0)<br>uglifyjs-webpack-plugin(2.1.3)<br>webpack(4.31.0)<br>webpack-cli(3.3.2)<br>webpack-strip-block(0.2.0)<br>lamed_io(1.0.21)<br>lamed_test(2.2.4)<br>see_it_done(*) | 19 
7 | **lamed_floweditor(1.0.5)** | Edit of flowcharts | commander(2.20.0)<br>html-entities(1.2.1)<br>lamed_flowchart(1.0.15)<br>lamed_folder(1.2.6)<br>lamed_io(1.1.5)<br>lamed_test(2.2.7)<br>lodash(4.17.11)<br>opn(6.0.0) | lamed_io(1.0.21)<br>lamed_test(2.2.4)<br>expect(24.7.1)<br>see_it_done(*) | 12 
8 | **lamed_learn(1.0.6)** | Bad-ass developers create awesome apps | camelcase(5.3.1)<br>chalk(2.4.2)<br>commander(2.20.0)<br>copy-paste(1.3.0)<br>lamed_folder(1.2.6)<br>lamed_io(1.1.5)<br>lamed_string(1.1.1)<br>lamed_test(2.2.7)<br>lodash(4.17.11)<br>node-cmd(3.0.0)<br>node-localstorage(1.3.1)<br>node-run-cmd(1.0.1)<br>opn(6.0.0)<br>recursive-readdir(2.2.2)<br>title-case(2.1.1) | assert(2.0.0)<br>expect(24.8.0)<br>lamed_io(1.0.21)<br>lamed_test(2.2.4)<br>see_it_done(*) | 20 
9 | **see_it_done(0.0.24)** | Agile project template | lamed_io(1.1.9)<br>lamed_string(1.1.6)<br>lamed_folder(1.2.11) | lamed_test(2.2.9) | 4 
10 | **lamed_markdown(0.0.1)** | lamed_markdown template project | ---- | expect(24.8.0)<br>lamed_io(1.0.21)<br>lamed_test(2.2.4)<br>see_it_done(*) | 4 
11 | **see_it_start(0.0.20)** | see_it_start template project | ---- | lamed_folder(1.2.6)<br>expect(24.8.0)<br>lamed_io(1.1.5)<br>lamed_string(1.1.1)<br>lamed_test(2.2.7) | 5 
12 | **lamed_name(0.0.1)** | Naming of files | ---- | lamed_test(2.2.9) | 1 

## Excluded dependencies

- babel-eslint
- mocha
- snazzy
- standard
- codecov
- nyc
