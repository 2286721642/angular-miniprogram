import { AssetPattern } from '@angular-devkit/build-angular';

export interface PagePattern extends Exclude<AssetPattern, string> {
  /** 入口名 */
  entryName: string;
  /** 匹配文件,相对于input */
  fileName: string;
  /** 要输出的js出口 */
  output: string;
  /** 绝对路径,path.join */
  src: string;
  outputFiles: {
    content: string;
    contentTemplate: string;
    style: string;
    logic: string;
  };
}
