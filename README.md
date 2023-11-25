#### Vscode
1.vscode命令号打开命令
- code .  打开文件
- 首选项、设置、npm搜索、auto Detect为on : 自动打开npm脚本，提供快捷启动选项。
- 查看、命令面板、输入settings、打开工作区设置、files.exclude将要隐藏文件设置。
- 首选项、用户代码片段
#### 插件使用
1. typeScript Auto Compiler : 自动转成js文件
2. Live Serve : 在浏览器中打开，自动热更新
#### ts项目目录
+  ts01 基础类型
+  ts02 interface接口  generic泛型
+  ts03 vue/cli
  > 1. home.vue ts组件的注册
  > 2. button js组件： 应用 $listeners $attr
  > 3. button ts组件：stylus混合的应用、reset混合函数、变量、滤镜
+  ts04 简单的后台管理系统
  > 1. div.home 创建div标签 class类为home
  > 2. home.vue 装饰器的作用;
  > 3. public/reset/reset.css引入
  > 4. element 安装  npm i element-ui -S:运行依赖  -D:开发依赖
  > 5. 引入[font-awesome图标库](http://www.fontawesome.com.cn/) 比 element-ui图标库更灵活 
+  ts06
  > 1. 泛型函数
  > 2. 泛型对象
  > 3. antd中常用接口类型

#### `typeof`: 获取`变量`、`类`、`接口`、`对象`或`函数`、的类型
```ts
  let x = 10;
  let y: typeof x; // y 的类型为 number，因为它是 x 的类型
  class MyClass {
    name: string = "example";
    age: number = 30;
  }
  let myInstance: MyClass = new MyClass();
  let typeOfInstance: typeof myInstance; 

  // 假设有一个函数
  function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  // 使用 typeof 获取函数的类型
  type GreetFunctionType = typeof greet;
  // 使用函数类型别名
  let greetFunction: GreetFunctionType = (name) => `Hello, ${name}!`;
  // 调用函数
  console.log(greetFunction("John")); // 输出: Hello, John!
```

#### `keyof`: (键名类型)

- keyof T：获取类型 T 的所有属性名的联合类型。例如，如果 T 是 { a: number, b: string }，那么 keyof T 就是 "a" | "b"。
- [K in keyof T]：这是映射类型的语法，表示对于 T 的每一个属性名 K，都要进行映射操作。
- 


#### `infer`:（推断类型）允许引入一个新的类型变量
```ts
  type ExtractReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

  function exampleFunction(): string {
    return "Hello, TypeScript!";
  }

  type ReturnTypeOfExample = ExtractReturnType<typeof exampleFunction>;
  // ReturnTypeOfExample 的类型为 string
```

#### `T[number]` 索引操作访问符

```ts
type Flatten<T> = T extends Array<any> ? T[number] : T;
type A = Flatten<number>;          // A 是 number
type B = Flatten<string[]>;        // B 是 string
type C = Flatten<boolean[][]>;     // C 是 boolean
type D = Flatten<number[] | string[]>;  // D 是 number | string
type E = Flatten<number[][] | string[][]>;  // E 是 number | string
type F = Flatten<number[] | string>;  // F 是 number[] | string

```

#### `ReturnType` 返回类型
```ts
// 定义一个函数类型
type MyFunction = () => number;
// 使用 ReturnType 提取函数的返回类型
type MyReturnType = ReturnType<MyFunction>;
// MyReturnType 的类型是 number
```