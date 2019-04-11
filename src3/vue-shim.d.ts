//告诉ts   .vue文件交给vue处理
declare module "*.vue" {
    import Vue from 'vue';
    export default Vue;
}
//将html识别为字符串
declare module "*.html" {
    let template: string;
    export default template;
}