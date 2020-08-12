<template>
  <div>
    <!-- <div class="markdown-body fmt" v-html="markdown_html"></div> -->
    <mavon-editor
      :toolbarsFlag="false"
      :subfield="false"
      defaultOpen="preview"
      v-model="markdown_html"
    />
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  components: {
    mavonEditor,
  },
  data() {
    return {
      markdown_html: `<h3><a id="HTML5___0"></a>HTML5  第一天</h3>
<h6><a id="_HTML5_2"></a>一、什么是 <code>HTML5</code></h6>
<ol>
<li>
<p><code>HTML5</code> 的概念与定义</p>
<ul>
<li>定义：<code>HTML5</code> 定义了 <code>HTML</code> 标准的最新版本，是对 <code>HTML</code> 的第五次重大修改，号称下一代的 <code>HTML</code></li>
<li>两个概念：
<ul>
<li>是一个新版本的 <code>HTML</code> 语言，定义了新的标签、特性和属性</li>
<li>拥有一个强大的技术集，这些技术集是指： <code>HTML5</code> 、<code>CSS3</code> 、<code>javascript</code>, 这也是广义上的 <code>HTML5</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p><code>HTML5</code> 拓展了哪些内容</p>
<ul>
<li>语义化标签</li>
<li>本地存储</li>
<li>兼容特性</li>
<li><code>2D</code>、<code>3D</code></li>
<li>动画、过渡</li>
<li><code>CSS3</code> 特性</li>
<li>性能与集成</li>
</ul>
</li>
<li>
<p><code>HTML5 </code> 的现状</p>
<p>绝对多数新的属性，都已经被浏览器所支持，最新版本的浏览器已经开始陆续支持最新的特性，</p>
<p>总的来说：<code>HTML5</code> 已经是大势所趋</p>
</li>
</ol>
<h6><a id="HTML5___29"></a>二、<code>HTML5 </code> 新增标签</h6>
<ol>
<li>
<p>什么是语义化</p>
</li>
<li>
<p>新增了那些语义化标签</p>
<ul>
<li><code>header</code>   —  头部标签</li>
<li><code>nav</code>        —  导航标签</li>
<li><code>article</code> —   内容标签</li>
<li><code>section</code> —   块级标签</li>
<li><code>aside</code>     —   侧边栏标签</li>
<li><code>footer</code>   —   尾部标签</li>
</ul>
<img src="images\yuyibq.png">
</li>
<li>
<p>使用语义化标签的注意</p>
<ul>
<li>语义化标签主要针对搜索引擎</li>
<li>新标签可以使用一次或者多次</li>
<li>在 <code>IE9</code> 浏览器中，需要把语义化标签都转换为块级元素</li>
<li>语义化标签，在移动端支持比较友好，</li>
<li>另外，<code>HTML5</code> 新增的了很多的语义化标签，随着课程深入，还会学习到其他的</li>
</ul>
</li>
</ol>
<h6><a id="_54"></a>三、多媒体音频标签</h6>
<ol>
<li>
<p>多媒体标签有两个，分别是</p>
<ul>
<li>音频  – <code>audio</code></li>
<li>视频  – <code>video</code></li>
</ul>
</li>
<li>
<p><code>audio</code> 标签说明</p>
<ul>
<li>可以在不使用标签的情况下，也能够原生的支持音频格式文件的播放，</li>
<li>但是：播放格式是有限的</li>
</ul>
</li>
<li>
<p>audio 支持的音频格式</p>
<ul>
<li>audio 目前支持三种格式</li>
</ul>
<img src="images\audio.png">
</li>
<li>
<p>audio 的参数</p>
<img src="images\audiocanshu.png">
</li>
</ol>
<p>5、audio 代码演示</p>
<pre><div class="hljs"><code class="lang-css">&lt;<span class="hljs-selector-tag">body</span>&gt;
  &lt;!<span class="hljs-selector-tag">--</span> 注意：在 <span class="hljs-selector-tag">chrome</span> 浏览器中已经禁用了 <span class="hljs-selector-tag">autoplay</span> 属性 <span class="hljs-selector-tag">--</span>&gt;
  &lt;!<span class="hljs-selector-tag">--</span> &lt;<span class="hljs-selector-tag">audio</span> <span class="hljs-selector-tag">src</span>="./<span class="hljs-selector-tag">media</span>/<span class="hljs-selector-tag">snow</span><span class="hljs-selector-class">.mp3</span>" <span class="hljs-selector-tag">controls</span> <span class="hljs-selector-tag">autoplay</span>&gt;&lt;/<span class="hljs-selector-tag">audio</span>&gt; <span class="hljs-selector-tag">--</span>&gt;

  &lt;!<span class="hljs-selector-tag">--</span> 
    因为不同浏览器支持不同的格式，所以我们采取的方案是这个音频准备多个文件
   <span class="hljs-selector-tag">--</span>&gt;
  &lt;<span class="hljs-selector-tag">audio</span> <span class="hljs-selector-tag">controls</span>&gt;
    &lt;<span class="hljs-selector-tag">source</span> <span class="hljs-selector-tag">src</span>="./<span class="hljs-selector-tag">media</span>/<span class="hljs-selector-tag">snow</span><span class="hljs-selector-class">.mp3</span>" <span class="hljs-selector-tag">type</span>="<span class="hljs-selector-tag">audio</span>/<span class="hljs-selector-tag">mpeg</span>" /&gt;
  &lt;/<span class="hljs-selector-tag">audio</span>&gt;
&lt;/<span class="hljs-selector-tag">body</span>&gt;
</code></div></pre>
<h6><a id="_96"></a>四、多媒体视频标签</h6>
<ol>
<li>
<p>video 视频标签</p>
<ul>
<li>目前支持三种格式</li>
</ul>
<img src="images\vedio.png">
</li>
<li>
<p>语法格式</p>
<pre><div class="hljs"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">video</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./media/video.mp4"</span> <span class="hljs-attr">controls</span>=<span class="hljs-string">"controls"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">video</span>&gt;</span>
</code></div></pre>
</li>
<li>
<p>video 参数</p>
<img src="images\videocanshu.png">
</li>
<li>
<p>video 代码演示</p>
<pre><div class="hljs"><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- &lt;video src="./media/video.mp4" controls="controls"&gt;&lt;/video&gt; --&gt;</span>

  <span class="hljs-comment">&lt;!-- 谷歌浏览器禁用了自动播放功能，如果想自动播放，需要添加 muted 属性 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">video</span> <span class="hljs-attr">controls</span>=<span class="hljs-string">"controls"</span> <span class="hljs-attr">autoplay</span> <span class="hljs-attr">muted</span> <span class="hljs-attr">loop</span> <span class="hljs-attr">poster</span>=<span class="hljs-string">"./media/pig.jpg"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./media/video.mp4"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"video/mp4"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./media/video.ogg"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"video/ogg"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">video</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
</code></div></pre>
</li>
<li>
<p>多媒体标签总结</p>
<ul>
<li>音频标签与视频标签使用基本一致</li>
<li>多媒体标签在不同浏览器下情况不同，存在兼容性问题</li>
<li>谷歌浏览器把音频和视频标签的自动播放都禁止了</li>
<li>谷歌浏览器中视频添加 muted 标签可以自己播放</li>
<li>注意：重点记住使用方法以及自动播放即可，其他属性可以在使用时查找对应的手册</li>
</ul>
</li>
</ol>
<h6><a id="_input__140"></a>五、新增 input 标签</h6>
<img src="images\h5input.png">
<h6><a id="_146"></a>六、新增表单属性</h6>
<img src="images\newinput.png">
<h6><a id="CSS3___152"></a>七、<code>CSS3 </code> 属性选择器(上)</h6>
<ol>
<li>
<p>什么是 <code>CSS3</code></p>
<ul>
<li>在 <code>CSS2</code> 的基础上拓展、新增的样式</li>
</ul>
</li>
<li>
<p><code>CSS3</code> 发展现状</p>
<ul>
<li>移动端支持优于 <code>PC</code> 端</li>
<li><code>CSS3</code> 目前还草案，在不断改进中</li>
<li><code>CSS3</code> 相对 <code>H5</code>，应用非常广泛</li>
</ul>
</li>
<li>
<p>属性选择器列表</p>
<img src="images\attrcanshu.png">
</li>
<li>
<p>属性选择器代码演示</p>
<pre><div class="hljs"><code class="lang-css"><span class="hljs-selector-tag">button</span> {
  <span class="hljs-attribute">cursor</span>: pointer;
}
<span class="hljs-selector-tag">button</span><span class="hljs-selector-attr">[disabled]</span> {
  <span class="hljs-attribute">cursor</span>: default
}
</code></div></pre>
</li>
</ol>
<h6><a id="CSS3___181"></a>八、<code>CSS3 </code> 属性选择器(下)</h6>
<ol>
<li>
<p>代码演示</p>
<pre><div class="hljs"><code class="lang-css"><span class="hljs-selector-tag">input</span><span class="hljs-selector-attr">[type=search]</span> {
  <span class="hljs-attribute">color</span>: skyblue;
}

<span class="hljs-selector-tag">span</span><span class="hljs-selector-attr">[class^=black]</span> {
  <span class="hljs-attribute">color</span>: lightgreen;
}

<span class="hljs-selector-tag">span</span><span class="hljs-selector-attr">[class$=black]</span> {
  <span class="hljs-attribute">color</span>: lightsalmon;
}

<span class="hljs-selector-tag">span</span><span class="hljs-selector-attr">[class*=black]</span> {
  <span class="hljs-attribute">color</span>: lightseagreen;
}
</code></div></pre>
</li>
</ol>
<h6><a id="_204"></a>九、结构伪类选择器</h6>
<ol>
<li>
<p>属性列表</p>
<img src="images\jiegouweilei.png">
</li>
<li>
<p>代码演示</p>
<pre><div class="hljs"><code class="lang-css"><span class="hljs-selector-tag">ul</span> <span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:first-child</span> {
  <span class="hljs-attribute">background-color</span>: lightseagreen;
}

<span class="hljs-selector-tag">ul</span> <span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:last-child</span> {
  <span class="hljs-attribute">background-color</span>: lightcoral;
}

<span class="hljs-selector-tag">ul</span> <span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:nth-child(3)</span> {
  <span class="hljs-attribute">background-color</span>: aqua;
}
</code></div></pre>
</li>
</ol>
<h6><a id="nthchild__228"></a>十、<code>nth-child</code> 参数详解</h6>
<ol>
<li>
<p>nth-child 详解</p>
<ul>
<li>
<p>注意：本质上就是选中第几个子元素</p>
</li>
<li>
<p>n 可以是数字、关键字、公式</p>
</li>
<li>
<p>n 如果是数字，就是选中第几个</p>
</li>
<li>
<p>常见的关键字有 <code>even</code> 偶数、<code>odd</code> 奇数</p>
</li>
<li>
<p>常见的公式如下(如果 n 是公式，则从 0 开始计算)</p>
</li>
<li>
<p>但是第 0 个元素或者超出了元素的个数会被忽略</p>
<img src="images\nthchildcanshu.png">
</li>
</ul>
</li>
<li>
<p>代码演示</p>
<pre><div class="hljs"><code class="lang-css">&lt;<span class="hljs-selector-tag">style</span>&gt;
  <span class="hljs-comment">/* 偶数 */</span>
  <span class="hljs-selector-tag">ul</span> <span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:nth-child(even)</span> {
    <span class="hljs-attribute">background-color</span>: aquamarine;
  }

  <span class="hljs-comment">/* 奇数 */</span>
  <span class="hljs-selector-tag">ul</span> <span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:nth-child(odd)</span> {
    <span class="hljs-attribute">background-color</span>: blueviolet;
  }

  <span class="hljs-comment">/*n 是公式，从 0 开始计算 */</span>
  <span class="hljs-selector-tag">ul</span> <span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:nth-child(n)</span> {
    <span class="hljs-attribute">background-color</span>: lightcoral;
  }

  <span class="hljs-comment">/* 偶数 */</span>
  <span class="hljs-selector-tag">ul</span> <span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:nth-child(2n)</span> {
    <span class="hljs-attribute">background-color</span>: lightskyblue;
  }

  <span class="hljs-comment">/* 奇数 */</span>
  <span class="hljs-selector-tag">ul</span> <span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:nth-child(2n</span> + 1) {
    <span class="hljs-attribute">background-color</span>: lightsalmon;
  }

  <span class="hljs-comment">/* 选择第 0 5 10 15, 应该怎么选 */</span>
  <span class="hljs-selector-tag">ul</span> <span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:nth-child(5n)</span> {
    <span class="hljs-attribute">background-color</span>: orangered;
  }

  <span class="hljs-comment">/* n + 5 就是从第5个开始往后选择 */</span>
  <span class="hljs-selector-tag">ul</span> <span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:nth-child(n</span> + 5) {
    <span class="hljs-attribute">background-color</span>: peru;
  }

  <span class="hljs-comment">/* -n + 5 前五个 */</span>
  <span class="hljs-selector-tag">ul</span> <span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:nth-child(-n</span> + 5) {
    <span class="hljs-attribute">background-color</span>: tan;
  }
&lt;/<span class="hljs-selector-tag">style</span>&gt;
</code></div></pre>
</li>
</ol>
<h6><a id="nthchild___ntoftype__294"></a>十一、<code>nth-child</code> 和  <code>nt-of-type</code> 的区别</h6>
<ol>
<li>
<p>代码演示</p>
<pre><div class="hljs"><code class="lang-css">&lt;<span class="hljs-selector-tag">style</span>&gt;
  <span class="hljs-selector-tag">div</span> <span class="hljs-selector-pseudo">:nth-child(1)</span> {
    <span class="hljs-attribute">background-color</span>: lightblue;
  }

  <span class="hljs-selector-tag">div</span> <span class="hljs-selector-pseudo">:nth-child(2)</span> {
    <span class="hljs-attribute">background-color</span>: lightpink;
  }

  <span class="hljs-selector-tag">div</span> <span class="hljs-selector-tag">span</span><span class="hljs-selector-pseudo">:nth-of-type(2)</span> {
    <span class="hljs-attribute">background-color</span>: lightseagreen;
  }

  <span class="hljs-selector-tag">div</span> <span class="hljs-selector-tag">span</span><span class="hljs-selector-pseudo">:nth-of-type(3)</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff</span>;
  }
&lt;/<span class="hljs-selector-tag">style</span>&gt;
</code></div></pre>
</li>
<li>
<p>区别</p>
<ul>
<li><code>nth-child</code>  选择父元素里面的第几个子元素，不管是第几个类型</li>
<li><code>nt-of-type</code>  选择指定类型的元素</li>
</ul>
</li>
</ol>
<h6><a id="_324"></a>十二、伪元素选择器</h6>
<ol>
<li>
<p>伪类选择器</p>
<img src="images\weiyuansu.png">
</li>
<li>
<p>伪类选择器注意事项</p>
<ul>
<li><code>before</code> 和 <code>after</code> 必须有 <code>content</code> 属性</li>
<li><code>before</code> 在内容前面，after 在内容后面</li>
<li><code>before</code> 和 <code>after</code> 创建的是一个元素，但是属于行内元素</li>
<li>创建出来的元素在 <code>Dom</code> 中查找不到，所以称为伪元素</li>
<li>伪元素和标签选择器一样，权重为 1</li>
</ul>
</li>
<li>
<p>代码演示</p>
<pre><div class="hljs"><code class="lang-css">&lt;<span class="hljs-selector-tag">style</span>&gt;
    <span class="hljs-selector-tag">div</span> {
      <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
      <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
      <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid lightcoral;
    }

    <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">::after</span>,
    <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">::before</span> {
      <span class="hljs-attribute">width</span>: <span class="hljs-number">20px</span>;
      <span class="hljs-attribute">height</span>: <span class="hljs-number">50px</span>;
      <span class="hljs-attribute">text-align</span>: center;
      <span class="hljs-attribute">display</span>: inline-block;
    }
    <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">::after</span> {
      <span class="hljs-attribute">content</span>: <span class="hljs-string">'德'</span>;
      <span class="hljs-attribute">background-color</span>: lightskyblue;
    }

    <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">::before</span> {
      <span class="hljs-attribute">content</span>: <span class="hljs-string">'道'</span>;
      <span class="hljs-attribute">background-color</span>: mediumaquamarine;
    }
  &lt;/<span class="hljs-selector-tag">style</span>&gt;

</code></div></pre>
</li>
</ol>
<h6><a id="_370"></a>十三、伪元素的案例</h6>
<ol>
<li>
<p>添加字体图标</p>
<pre><div class="hljs"><code class="lang-css"><span class="hljs-selector-tag">p</span> {
   <span class="hljs-attribute">width</span>: <span class="hljs-number">220px</span>;
   <span class="hljs-attribute">height</span>: <span class="hljs-number">22px</span>;
   <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid lightseagreen;
   <span class="hljs-attribute">margin</span>: <span class="hljs-number">60px</span>;
   <span class="hljs-attribute">position</span>: relative;
}
<span class="hljs-selector-tag">p</span><span class="hljs-selector-pseudo">::after</span> {
  <span class="hljs-attribute">content</span>: <span class="hljs-string">'\ea50'</span>;
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">'icomoon'</span>;
  <span class="hljs-attribute">position</span>: absolute;
  <span class="hljs-attribute">top</span>: -<span class="hljs-number">1px</span>;
  <span class="hljs-attribute">right</span>: <span class="hljs-number">10px</span>;
}

</code></div></pre>
</li>
</ol>
<h6><a id="2D__translate_392"></a>十四、<code>2D</code> 转换之 <code>translate</code></h6>
<ol>
<li>
<p><code>2D</code> 转换</p>
<ul>
<li>
<p><code>2D</code> 转换是改变标签在二维平面上的位置和形状</p>
</li>
<li>
<p>移动： <code>translate</code></p>
</li>
<li>
<p>旋转： <code>rotate</code></p>
</li>
<li>
<p>缩放： <code>scale</code></p>
</li>
</ul>
</li>
<li>
<p><code>translate</code> 语法</p>
<ul>
<li>x 就是 x 轴上水平移动</li>
<li>y 就是 y 轴上水平移动</li>
</ul>
<pre><div class="hljs"><code class="lang-css"><span class="hljs-selector-tag">transform</span>: <span class="hljs-selector-tag">translate</span>(<span class="hljs-selector-tag">x</span>, <span class="hljs-selector-tag">y</span>)
<span class="hljs-selector-tag">transform</span>: <span class="hljs-selector-tag">translateX</span>(<span class="hljs-selector-tag">n</span>)
<span class="hljs-selector-tag">transfrom</span>: <span class="hljs-selector-tag">translateY</span>(<span class="hljs-selector-tag">n</span>)

</code></div></pre>
</li>
<li>
<p>重点知识点</p>
<ul>
<li><code>2D</code> 的移动主要是指 水平、垂直方向上的移动</li>
<li><code>translate</code> 最大的优点就是不影响其他元素的位置</li>
<li><code>translate</code> 中的100%单位，是相对于本身的宽度和高度来进行计算的</li>
<li>行内标签没有效果</li>
</ul>
</li>
<li>
<p>代码演示</p>
</li>
</ol>
<pre><div class="hljs"><code class="lang-css"><span class="hljs-selector-tag">div</span> {
  <span class="hljs-attribute">background-color</span>: lightseagreen;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
  <span class="hljs-comment">/* 平移 */</span>
  <span class="hljs-comment">/* 水平垂直移动 100px */</span>
  <span class="hljs-comment">/* transform: translate(100px, 100px); */</span>

  <span class="hljs-comment">/* 水平移动 100px */</span>
  <span class="hljs-comment">/* transform: translate(100px, 0) */</span>

  <span class="hljs-comment">/* 垂直移动 100px */</span>
  <span class="hljs-comment">/* transform: translate(0, 100px) */</span>

  <span class="hljs-comment">/* 水平移动 100px */</span>
  <span class="hljs-comment">/* transform: translateX(100px); */</span>

  <span class="hljs-comment">/* 垂直移动 100px */</span>
  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateY</span>(100px)
}

</code></div></pre>
<h6><a id="_447"></a>十五、让一个盒子水平垂直居中</h6>
<ul>
<li>看代码</li>
</ul>
<h6><a id="2D__rotate_451"></a>十六、<code>2D 转换 rotate</code></h6>
<ol>
<li>
<p>rotate 旋转</p>
<ul>
<li><code>2D</code> 旋转指的是让元素在二维平面内顺时针或者逆时针旋转</li>
</ul>
</li>
<li>
<p><code>rotate</code> 语法</p>
<pre><div class="hljs"><code class="lang-css"><span class="hljs-comment">/* 单位是：deg */</span>
<span class="hljs-selector-tag">transform</span>: <span class="hljs-selector-tag">rotate</span>(度数) 

</code></div></pre>
</li>
<li>
<p>重点知识点</p>
<ul>
<li><code>rotate</code> 里面跟度数，单位是 <code>deg</code></li>
<li>角度为正时，顺时针，角度为负时，逆时针</li>
<li>默认旋转的中心点是元素的中心点</li>
</ul>
</li>
<li>
<p>代码演示</p>
<pre><div class="hljs"><code class="lang-css"><span class="hljs-selector-tag">img</span><span class="hljs-selector-pseudo">:hover</span> {
  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">rotate</span>(360deg)
}

</code></div></pre>
</li>
</ol>
`,
    };
  },
};
</script>

<style lang="less" scoped>
.markdown-body{
    z-index: 2 !important;
}
</style>