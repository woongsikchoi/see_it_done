# Project Dependencies

 Project | Description | Dependencies | devDependencies
-------- | ------------ |--------------- | ------------
**lamed_core(0.0.5)** | Core functions  |    |    |
**lamed_test(2.2.10)** | Test functions |  lamed_core(0.0.5) |
**lamed_string(1.1.6)** | String functions | lamed_core(0.0.5) | lamed_test(2.2.10) 
**lamed_io(1.1.9)** | IO functions | clipboardy(2.0.0)<br>lamed_core(0.0.5)<br>lamed_string(1.1.6)<br>node-localstorage(1.3.1)<br>readline(1.3.0) | lamed_test(2.2.10)
**lamed_folder(1.2.10)** | folder search functions | lamed_string(1.1.6)<br>lamed_test(2.2.10) | lamed_io(1.1.9)<br>lamed_test(2.2.10)

## Ignore devDependencies
- babel-eslint
- codecov
- mocha
- nyc
- snazzy
- standard

