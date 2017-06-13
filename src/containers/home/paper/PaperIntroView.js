import React, { Component } from 'react';
import { WebView, Dimensions, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import HtmlHelper from '../../../utils/HtmlHelper';
import Helper from '../../../utils/helper';

class PaperIntroView extends Component {
  static componentName = 'PaperIntroView';

  render() {
    const bookHtml = `
  <div>
    <p>
      本书是我在编程生涯初期的一些体会，它更像是一本关于Web开发的索引书籍，但其实这些索引正是我读了大量书籍后，自己对精髓之处进行的理解加工。在这本书里，你会看到我对很多知识点进行了概括，并以实战的方式将一个个知识点连接到一起。</p>
    <p>在最开始的时候，我曾经想将书名命名为实习记。后来又觉得虽然这是在我实习期间学到的知识，但其实很多内容在其他公司是学不到的。因此，在电子书里将其命名为Growth，它不仅是在让读者增长，也在让我自己增长。</p>
  </div>

  <h2>目录结构</h2>

  <div>
    <p>本书从结构上分成了三部分，每个部分都会不同的侧重点。</p>
    <p>第一部分：<strong>准备阶段</strong></p>
    <p>在这一部分里，我们会将主要集中于编码前的一系列开发准备工具，从选择一个合适的 IDE 到创建一个 Web 应用的构建流。</p>
    <p><strong>第1章 基础知识</strong> 介绍了搭建开发所需要的基本环境，以及IDE、操作系统、版本管理工具等等日常工具的选择与使用。还介绍了如何对一个目标进行切分，以便于我们在实现的时候可以一步步往下实践。
    </p>
    <p><strong>第2章 最小可行化应用</strong> 介绍了如何使用 UI 工具来创建原型，并根据这个原型创建出一个最简单的 Web 应用。并介绍了在 Web
      应用开发的过程中，如何使用精益的思想来开发出用户喜爱的产品。</p>
    <p><strong>第3章 技术选型与业务</strong> 对后台开发所需要的技术进行一个简单的概览，并介绍了不同后台组件的框架，以及如何从这些框架中选择出合适的框架。同时还介绍了 Python 下的 Web 开发框架
      Django，以及如何用这个框架创建一个 hello, world。</p>
    <p><strong>第4章 构建系统及其工作流</strong> 介绍 Web 应用中常见的构建流程及组件，以及如何结合 Fabric 来打造后台的构建系统。</p>
    <p>第二部分：<strong>编码到上线</strong></p>
    <p>在这一部分里，我们主要讲述大部分 Web 应用的开发过程，并介绍在开发过程中的一些好的实践。</p>
    <p><strong>第5章 Coding</strong> 介绍了如何使用 Django 创建一个简单的博客应用，以及如何使用单元测试、UI 测试来测试代码的功能。</p>
    <p><strong>第6章 上线</strong> 介绍了如何手动来部署我们开发的 Web 应用到产品环境，以及如何使用自动部署工具来完成自动化部署。</p>
    <p><strong>第7章 数据分析和体验优化</strong> 介绍了如何使用网页监测工具来分析网页的流量来源、用户行为等等，并结合一些前端、后台的优化工具来对应用进行优化。</p>
    <p><strong>第8章 持续交付</strong> 介绍了如何使用持续集成工具，以及如何使用持续集成工具来改进开发流程，并实现自动化的部署。</p>
    <p><strong>第9章 移动 Web 与移动应用</strong> 介绍如何结写后台 API来创建移动应用，并介绍如何为单页面应用提供 SEO 支持。</p>
    <p>第三部分：<strong>增量性优化</strong></p>
    <p><strong>第10章 遗留代码与重构</strong> 介绍什么是遗留系统，以及如何基于第二部分中的经验来改进遗留系统。</p>
    <p><strong>第11章 增长与新架构</strong> 介绍如何使用回顾与反馈来使程序员成长，并介绍如何依据需要设计出新的架构。</p>
  </div>`;

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <List style={{ marginTop: 15, marginBottom: 15, backgroundColor: '#fff' }}>
          <ListItem
            title={'亚马逊'}
            onPress={() => { Helper.openLink('https://www.amazon.cn/dp/B0722YJR89'); }}
          />
          <ListItem
            title={'京东'}
            onPress={() => { Helper.openLink('http://item.jd.com/12195442.html'); }}
          />
          <ListItem
            title={'当当'}
            onPress={() => { Helper.openLink('http://product.dangdang.com/25077858.html'); }}
          />
        </List>
        <WebView
          scalesPageToFit
          source={{ html: HtmlHelper.getHtml(bookHtml) }}
          style={{ height: Dimensions.get('window').height, backgroundColor: 'white' }}
        />
      </View>
    );
  }
}

export default PaperIntroView;
