# Autocomplete

This project was generated with [NPX] version 6.13.7

## Show result

Run `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## `Autocomplete` 的使用方法
### 输入参数
#### [searchResult]: string[]
传入自动补齐候选值

### 输出参数
#### (handleSearch): (value: string)=> {} 
当`handleSearch`被调用时，触发查询操作(本例mock代替)后将自动匹配的候选值放入`searchResult`

`value`是输入框当前值

#### (valueChange): (value: string)=> {}
当`valueChange`被调用时，更新组件中的input值给外部组件
