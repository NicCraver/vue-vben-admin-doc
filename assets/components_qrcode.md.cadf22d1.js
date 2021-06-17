import{o as n,c as s,a}from"./app.9632d56c.js";const t='{"title":"QrCode","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Methods","slug":"methods"}],"relativePath":"components/qrcode.md","lastUpdated":1623944308559}',p={},o=a('<h1 id="qrcode"><a class="header-anchor" href="#qrcode" aria-hidden="true">#</a> QrCode</h1><p>用于生成二维码的组件</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QrCode</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>qrCodeUrl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> QrCode<span class="token punctuation">,</span> QrCodeActionType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Qrcode/index&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> LogoImg <span class="token keyword">from</span> <span class="token string">&#39;/@/assets/images/logo.png&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> qrCodeUrl <span class="token operator">=</span> <span class="token string">&#39;https://www.vvbin.cn&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> QrCode <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> qrRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Nullable<span class="token operator">&lt;</span>QrCodeActionType<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">function</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> qrEl <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>qrRef<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>qrEl<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n        qrEl<span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string">&#39;文件名&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        qrCodeUrl<span class="token punctuation">,</span>\n        LogoImg<span class="token punctuation">,</span>\n        download<span class="token punctuation">,</span>\n        qrRef<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.qrcode-demo-item</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>\n    <span class="token property">margin-right</span><span class="token punctuation">:</span> 1%<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><p>| 属性 | 类型 | 默认值 | 可选值 | 说明 | | ------- | ------------------------ | ------ | ------- | ------------------------------------- | ------------------- | | value | <code>string</code> | - | - | 二维码地址 | | options | <code>QRCodeRenderersOptions</code> | - | - | 二维码配置 ,见 QRCodeRenderersOptions | | width | <code>number</code> | 2-- | - | 宽度 | | logo | <code>string｜LogoType</code> | - | - | 中间 logo 配置，见 LogoType | | tag | <code>渲染标签</code> | canvas | <code>canvas | img</code> | img 不支持内嵌 logo |</p><p><strong>QRCodeRenderersOptions</strong></p><div class="language-ts"><pre><code>    <span class="token comment">/**\n     * 定义margin的宽度。.\n     * Default: 4\n     */</span>\n    margin<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token comment">/**\n     * 比例因子。值1表示每个模块1像素（黑点）。\n     * Default: 4\n     */</span>\n    scale<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    <span class="token comment">/**\n     * 为输出图像强制指定宽度。\n     * 如果宽度太小而不能包含qr符号，则此选项将被忽略。\n     * 优先于规模。\n     */</span>\n    width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    color<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">/**\n         * 暗模块的颜色。值必须为十六进制格式（RGBA）.\n         * 注意：深色应始终比color.light暗。.\n         * Default: #000000ff\n         */</span>\n        dark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n        <span class="token comment">/**\n         * 照明模块的颜色。值必须为十六进制格式（RGBA）.\n         * Default: #ffffffff\n         */</span>\n        light<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n</code></pre></div><p><strong>LogoType</strong></p><div class="language-js"><pre><code><span class="token punctuation">{</span>\n  <span class="token comment">// logo图片</span>\n  src<span class="token operator">:</span> string<span class="token punctuation">;</span>\n  <span class="token comment">// logo大小</span>\n  logoSize<span class="token operator">:</span> number<span class="token punctuation">;</span>\n  <span class="token comment">// 背景颜色</span>\n  bgColor<span class="token operator">:</span> string<span class="token punctuation">;</span>\n  <span class="token comment">// logo圆角</span>\n  logoRadius<span class="token operator">:</span> number<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><table><thead><tr><th>名称</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>download</td><td><code>Function(fileName:string)</code></td><td>下载</td></tr></tbody></table>',12);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
