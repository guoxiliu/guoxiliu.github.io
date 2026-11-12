<script>
import { globalState } from '@/globalState';
import { Counter } from 'counterapi';

export default {
  name: 'Home',
  data() {
    const daisyImg = require('@/assets/imgs/Daisy.jpg');
    const bananaImg = require('@/assets/imgs/Banana.jpg');

    return {
      realEmailAddress: "liu.12722@osu.edu",
      protectedEmail: "[my protected email]",
      showEmail: false,
      viewerCount: null,
      showOverlay: false,
      overlayImgSrc: null, // <-- add this line
      languageContent: {
        en: {
          name: "Guoxi Liu",
          title: "Postdoc Scholar",
          department: "Department of Computer Science and Engineering",
          university: "The Ohio State University",
          previous: "Previous affiliation:",
          previousLab: "Visual Computing Lab",
          previousDepartment: "School of Computing",
          previousUniversity: "Clemson University",
          currentAddress: "Current work address:",
          workAddress: "680 Dreese Laboratories<br>2015 Neil Ave<br>Columbus, OH, USA 43210",
          emailLabel: "Email: ",
          aboutLabel: "About Me",
          aboutParagraphs: [
            [
              "I am currently a postdoctoral scholar in ",
              { type: "span", color: "#BA0C2F", text: "Department of Computer Science and Engineering" },
              " at ",
              { type: "img", src: require('@/assets/imgs/osu-logo.png'), alt: "Ohio State University Logo", color: "#BA0C2F", text: "The Ohio State University", url: null },
              ", working with ",
              { type: "a", url: "https://hguo.github.io/", color: "#BA0C2F", text: "Prof. Hanqi Guo" },
              ". Before joining OSU, I obtained my Ph.D. in Computer Science from ",
              { type: "img", src: require('@/assets/imgs/clemson-logo.png'), alt: "Clemson University Logo", color: "#F56600", text: "Clemson University", url: null },
              ", where I was advised by ",
              { type: "a", url: "https://fiurici.people.clemson.edu/", color: "#F56600", text: "Prof. Federico Iuricich" },
              ". My research interests include scientific visualization, topological data analysis, parallel computation, and data compression."
            ],
            [
              "Prior to my doctoral studies, I got my Bachelor’s degree in Computer Science and Technology from ",
              { type: "img", src: require('@/assets/imgs/chd-logo.jpg'), alt: "Chang'an University Logo", color: "#005BAC", text: "Chang’an University (CHD)", url: "https://en.chd.edu.cn/" },
              ". During my undergraduate years, I studied as an exchange student at ",
              { type: "img", src: require('@/assets/imgs/ncu-logo.png'), alt: "National Central University Logo", color: "#FBCB59", text: "National Central University", url: "https://www.ncu.edu.tw/en/" },
              " in Taoyuan City, Taiwan Province. I was also a visiting student in Digital Biology Lab at ",
              { type: "img", src: require('@/assets/imgs/mizzou-logo.png'), alt: "University of Missouri-Columbia Logo", color: "#F1B82E", text: "University of Missouri-Columbia (Mizzou)", url: "https://missouri.edu/" },
              "."
            ],
            [
              "BTW, my name can be pronounced as “Gwoh-shee Lee-oo” :)"
            ],
            [
              "Outside of research, I have two pets: a ",
              { type: "span", fontSize: "1.2em", fontWeight: "600", text: "big dog" },
              " named ",
              { type: "span", color: "#FF0000", text: "Daisy" },
              " and a ",
              { type: "span", fontSize: "0.85em", text: "small cat" },
              " named ",
              { type: "span", color: "#F54927", text: "Banana" },
              ". They were both adopted from local shelters."
            ],
          ],
          pets: [
            { name: "Daisy", alt: "Daisy the dog", img: daisyImg },
            { name: "Banana", alt: "Banana the cat", img: bananaImg }
          ],
          newsLabel: "News",
          news: [
            {
              date: "July 25, 2026",
              text: `Our paper, "<a href="https://arxiv.org/abs/2608.08386" target="_blank" style="color:#BC4A73;">FZ-VIS: A Visual Analytics Framework for Quantities-of-Interest-Aware Scientific Lossy Compression</a>", has been accepted by <a href="https://ieeevis.org/year/2026/welcome/" target="_blank"><img src="${require('@/assets/news/VIS-2026-logo.svg')}" alt="IEEE VIS 2026 Logo" style="height:1.5em;vertical-align:middle;margin-left:2px;" /></a>. Check out the <a href="https://go.osu.edu/fzvis" target="_blank" style="color:#BC4A73;" title="Passcode: osu">live demo</a> (hover 3 seconds for passcode hint). Thanks to all the reviewers for their valuable feedback during the review process. I plan to attend the conference in Boston, USA this November.`
            },
            {
              date: "July 25, 2026",
              text: `Our paper, "<a href="https://arxiv.org/abs/2603.29139" target="_blank" style="color:#BC4A73;">SciVisAgentBench: A Benchmark for Evaluating Scientific Data Analysis and Visualization Agents</a>", has been accepted by <a href="https://ieeevis.org/year/2026/welcome/" target="_blank"><img src="${require('@/assets/news/VIS-2026-logo.svg')}" alt="IEEE VIS 2026 Logo" style="height:1.5em;vertical-align:middle;margin-left:2px;" /></a>. Congratulations to Kuangshi Ai! I feel very honored to have contributed to the work.`
            },
            {
              date: "July 17, 2026",
              text: `Our short paper, "<a href="https://data.tech.ieeevis.org/storage/v1/object/sign/vis2026/pdf-files/v-short/1363-doc.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aXMyMDI2L3BkZi1maWxlcy92LXNob3J0LzEzNjMtZG9jLnBkZiIsImlhdCI6MTc5MTI3NzY3MSwiZXhwIjoxODIyODEzNjcxfQ.SDva46xu7yd61yTlVH98rt2Yg8Clg15UcaYzsAojr9k" target="_blank" style="color:#BC4A73;">Subdivision Matters: Partitioning Strategies for Task-Parallel Topological Visualization</a>", has been accepted by <a href="https://ieeevis.org/year/2026/welcome/" target="_blank"><img src="${require('@/assets/news/VIS-2026-logo.svg')}" alt="IEEE VIS 2026 Logo" style="height:1.5em;vertical-align:middle;margin-left:2px;" /></a>. Congratulations to Mithilesh Biradar! I feel very honored to have contributed to the work.`
            },
            {
              date: "July 27, 2025",
              text: `Our paper, "<a href="https://arxiv.org/abs/2507.15230" target="_blank" style="color:#DA171C;">GALE: Leveraging Heterogeneous Systems for Efficient Unstructured Mesh Data Analysis</a>", has been accepted by <a href="https://ieeevis.org/year/2025/welcome" target="_blank"><img src="${require('@/assets/news/VIS-2025-logo.svg')}" alt="IEEE VIS 2025 Logo" style="height:1.65em;vertical-align:middle;margin-left:2px;" /></a>. Thanks to all the reviewers for their valuable feedback during the review process. I plan to attend the conference in Vienna, Austria this November.`
            },
            {
              date: "March 7, 2025",
              textBefore: "I have successfully defended my Ph.D. dissertation, <a href='https://open.clemson.edu/all_dissertations/3872/' target='_blank' style='color:#F56600'><i>Advancing Efficiency of Unstructured Mesh Processing With Localized Data Structures</i></a>. Special thanks to my advisory committee and everyone who has supported me ",
              linkText: "throughout this journey",
              img: require('@/assets/news/PhD-banquet.jpg'),
              linkColor: "#F56600",
              textAfter: ".",
            },
            {
              date: "October 15, 2024",
              textBefore: `Our paper submitted to <i>IEEE Workshop on Topological Data Analysis and Visualization (TopoInVis)</i> at <a href="https://ieeevis.org/year/2024/welcome" target="_blank"><img src="${require('@/assets/news/VIS-2024-logo.png')}" alt="IEEE VIS 2024 Logo" style="height:1.5em;vertical-align:middle;margin-left:2px;" /></a> has been selected for the `,
              linkText: "<strong>Best Paper Award<strong>",
              img: require('@/assets/news/TopoInVis-2024-best-paper-award.jpg'),
              linkColor: "#52B9F5",
              textAfter: ". Congratulations to Yuehui! I feel very honored to be part of the team and have contributed to the work.",
            },
            {
              date: "July 15, 2024",
              text: `I have been selected for <a href="https://www.clemson.edu/research/division-of-research/resources/r-init-sub-pages/doctoral-dissertation-grant.html" target="_blank" style="color:#F56600;">Doctoral Dissertation Completion Grant</a> from Clemson University! I am looking forward to defending my dissertation later this year.`,
            },
            {
              date: "April 30, 2024",
              text: "I have successfully passed my dissertation proposal! Thanks to my dissertation committee!",
            },
            {
              date: "July 15, 2023",
              text: `Our paper, "<a href="https://arxiv.org/abs/2308.15638" target="_blank" style="color:#38381D;">A Task-Parallel Approach for Localized Topological Data Structures</a>", has been accepted by <a href="https://ieeevis.org/year/2023/welcome" target="_blank"><img src="${require('@/assets/news/VIS-2023-logo.svg')}" alt="IEEE VIS 2023 Logo" style="height:1.4em;vertical-align:middle;margin-left:2px;margin-right:2px;" /></a>. Thanks to all the reviewers for their thoughtful comments and feedback during the review process. See you in Melbourne, Australia this October!`,
            },
            {
              date: "April 28, 2022",
              text: `Our paper, <a href="https://arxiv.org/abs/2204.09783" target="_blank">"TopoEmbedding, A Web Tool for the Interactive Analysis of Persistent Homology"</a>, has been accepted by <a href="https://meetings.siam.org/program.cfm?CONFCODE=SDM22" target="_blank"><i>TDA Workshop at SIAM International Conference on Data Mining (SDM) 2022</i></a>. Congratulations to Xueyi, and thanks to all the reviewers!`,
            },
            {
              date: "January 26, 2022",
              text: `I have successfully passed my <a href="https://www.clemson.edu/cecas/departments/computing/academics/graduates/degrees/phd-cs.html#portfolioanddissertation" target="_blank">portfolio review</a>, which serves as the Comprehensive Examination in the School of Computing. I will proceed to the dissertation phase of my doctoral studies.`,
            },
            {
              date: "January 5, 2022",
              text: `Our memory-efficient topological data structure, TopoCluster, has been officially integrated into the <a href="https://topology-tool-kit.github.io/" target="_blank"><img src="${require('@/assets/imgs/ttk-logo.png')}" alt="Topology Toolkit Logo" style="height:1.3em;vertical-align:middle;margin-left:2px;margin-right:2px;" />Topology Toolkit</a>. Please check out <a href="https://topology-tool-kit.github.io/examples/compactTriangulation/" target="_blank">this example page</a> on how to invoke the CompactTriangulation class in TTK. Thanks to Dr. Julien Tierny and Dr. Pierre Guillou for their valuable help throughout the whole integration process.`,
            },
            {
              date: "November 9, 2021",
              text: `I have been allocated a slot to present my TVCG paper at <a href="https://ieeevis.org/year/2022/welcome" target="_blank"><img src="${require('@/assets/news/VIS-2022-logo.svg')}" alt="IEEE VIS 2022 Logo" style="height:1.35em;vertical-align:middle;margin-left:2px;margin-right:2px;" /></a>. Thanks to Dr. Han-Wei Shen for providing me with such great opportunity. See you in Oklahoma City next year!`
            },
            {
              date: "October 15, 2021",
              text: `My first paper, "<a href="https://doi.org/10.1109/TVCG.2021.3121229" target="_blank">TopoCluster: A Localized Data Structure for Topology-based Visualization</a>", has been accepted for publication in <i>IEEE Transactions on Visualization and Computer Graphics (TVCG)</i>. Thanks to all the collaborators and reviewers for their valuable contributions and efforts.`
            },
            {
              date: "July 16, 2021",
              text: `Our project submitted to <a href="https://gt-rl.github.io/2021/challenge.html" target="_blank"><i>ICLR Computational Geometry & Topology Challenge 2021</i></a> has been included in the final summary white paper. For more details, please visit <a href="https://arxiv.org/abs/2108.09810" target="_blank">this link</a>. Even though our project did not secure a top-three ranking, participating in this event was a highly enjoyable experience. Thanks to the organizers for providing such a creative and welcoming environment.`
            },
            {
              date: "August 25, 2018",
              text: "I have started my doctoral study at Clemson University!"
            }
          ]
        },
        zh: {
          name: "刘国玺",
          title: "博士后研究学者",
          department: "计算机科学与工程系",
          university: "美国俄亥俄州立大学",
          previous: "此前署名单位：",
          previousLab: "视觉计算实验室",
          previousDepartment: "计算机学院",
          previousUniversity: "克莱姆森大学",
          currentAddress: "目前工作地址：",
          workAddress: "德里斯实验室6楼680<br>尼尔大道2015号<br>美国俄亥俄州哥伦布市<br>邮政编码：43210",
          emailLabel: "电子邮箱：",
          aboutLabel: "个人简介",
          aboutParagraphs: [
            [
              "我目前在",
              { type: "img", src: require('@/assets/imgs/osu-logo.png'), alt: "Ohio State University Logo", color: "#BA0C2F", text: "美国俄亥俄州立大学（R1大学）", url: null },
              { type: "span", color: "#BA0C2F", text: "计算机科学与工程系" },
              "从事博士后研究，合作导师为",
              { type: "a", url: "https://hguo.github.io/", color: "#BA0C2F", text: "郭翰琦博士" },
              "。在加入俄亥俄州立大学之前，我在",
              { type: "img", src: require('@/assets/imgs/clemson-logo.png'), alt: "Clemson University Logo", color: "#F56600", text: "克莱姆森大学（R1大学）", url: null },
              "获得计算机科学博士学位，导师为",
              { type: "a", url: "https://fiurici.people.clemson.edu/", color: "#F56600", text: "Federico Iuricich博士" },
              "。我的研究方向包括数据可视化、拓扑数据分析、并行计算与数据压缩。"
            ],
            [
              "我本科毕业于",
              { type: "img", src: require('@/assets/imgs/chd-logo.jpg'), alt: "长安大学校徽", color: "#005BAC", text: "长安大学", url: "https://www.chd.edu.cn/" },
              "计算机科学与技术（卓越工程师）专业。期间曾在",
              { type: "img", src: require('@/assets/imgs/ncu-logo.png'), alt: "中央大学校徽", color: "#FBCB59", text: "台湾中央大学", url: "https://www.ncu.edu.tw/" },
              "资讯工程学系交换学习，并在",
              { type: "img", src: require('@/assets/imgs/mizzou-logo.png'), alt: "密苏里大学校徽", color: "#F1B82E", text: "密苏里大学哥伦比亚分校（R1大学）", url: "https://missouri.edu/" },
              "数字生物实验室访学。"
            ],
            [
              "在科研之外，我还养了两只宠物：一只名叫",
              { type: "span", color: "pink", text: "黛西" },
              "的",
              { type: "span", fontSize: "1.2em", fontWeight: "600", text: "大狗" },
              "和一只名叫",
              { type: "span", color: "orange", text: "香蕉" },
              "的",
              { type: "span", fontSize: "0.85em", text: "小猫" },
              "。"
            ],
            // [
            //   "中文内容可能更新较慢或部分内容缺失，敬请谅解。",
            // ],
          ],
          pets: [
            { name: "黛西", alt: "大狗 黛西", img: daisyImg },
            { name: "香蕉", alt: "小猫 香蕉", img: bananaImg }
          ],
          newsLabel: "更新",
          news: [
            {
              date: "2026年07月25日",
              text: `我以第一作者身份完成的论文 "<a href="https://arxiv.org/abs/2608.08386" target="_blank" style="color:#BC4A73;">FZ-VIS: A Visual Analytics Framework for Quantities-of-Interest-Aware Scientific Lossy Compression</a>"（FZ-VIS：面向感兴趣的量的科学数据有损压缩可视化分析框架）已被 <a href="https://ieeevis.org/year/2026/welcome/" target="_blank"><img src="${require('@/assets/news/VIS-2026-logo.svg')}" alt="IEEE VIS 2026 Logo" style="height:1.5em;vertical-align:middle;margin-left:2px;" /></a> 录用。欢迎体验<a href="https://go.osu.edu/fzvis" target="_blank" style="color:#BC4A73;" title="Passcode: osu">在线演示</a>（鼠标悬停3秒查看访问密码提示）。感谢所有审稿人在评审过程中提出的宝贵修改意见！我计划今年11月前往美国波士顿参会。`
            },
            {
              date: "2026年07月25日",
              text: `我参与合作的论文 "<a href="https://arxiv.org/abs/2603.29139" target="_blank" style="color:#BC4A73;">SciVisAgentBench: A Benchmark for Evaluating Scientific Data Analysis and Visualization Agents</a>"（SciVisAgentBench：用于评估科学数据分析与可视化智能体的基准测试）已被 <a href="https://ieeevis.org/year/2026/welcome/" target="_blank"><img src="${require('@/assets/news/VIS-2026-logo.svg')}" alt="IEEE VIS 2026 Logo" style="height:1.5em;vertical-align:middle;margin-left:2px;" /></a> 录用。祝贺 Kuangshi Ai！我也感到非常荣幸能参与这项工作。`
            },
            {
              date: "2026年07月17日",
              text: `我参与合作的短篇论文 "<a href="https://data.tech.ieeevis.org/storage/v1/object/sign/vis2026/pdf-files/v-short/1363-doc.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aXMyMDI2L3BkZi1maWxlcy92LXNob3J0LzEzNjMtZG9jLnBkZiIsImlhdCI6MTc5MTI3NzY3MSwiZXhwIjoxODIyODEzNjcxfQ.SDva46xu7yd61yTlVH98rt2Yg8Clg15UcaYzsAojr9k" target="_blank" style="color:#BC4A73;">Subdivision Matters: Partitioning Strategies for Task-Parallel Topological Visualization</a>"（划分的重要性：面向任务并行拓扑可视化的分区策略）已被 <a href="https://ieeevis.org/year/2026/welcome/" target="_blank"><img src="${require('@/assets/news/VIS-2026-logo.svg')}" alt="IEEE VIS 2026 Logo" style="height:1.5em;vertical-align:middle;margin-left:2px;" /></a> 录用。祝贺 Mithilesh Biradar！我也感到非常荣幸能参与这项工作。`
            },
            {
              date: "2025年07月27日",
              text: `我以第一作者身份完成的论文 "<a href="https://arxiv.org/abs/2507.15230" target="_blank" style="color:#DA171C;">GALE: Leveraging Heterogeneous Systems for Efficient Unstructured Mesh Data Analysis</a>"《GALE：利用异构系统实现对不规则网格的高效数据分析》已被 <a href="https://ieeevis.org/year/2025/welcome" target="_blank"><img src="${require('@/assets/news/VIS-2025-logo.svg')}" alt="IEEE VIS 2025 Logo" style="height:1.65em;vertical-align:middle;margin-left:2px;" /></a> 录用。感谢所有审稿人在评审过程中提出的宝贵修改意见！我计划今年11月前往奥地利维也纳参会。`
            },
            {
              date: "2025年03月07日",
              textBefore: `我已顺利完成博士毕业论文答辩，论文题目为 <a href='https://open.clemson.edu/all_dissertations/3872/' target='_blank' style='color:#F56600'><i>Advancing Efficiency of Unstructured Mesh Processing With Localized Data Structures</i></a>《利用局部性数据结构提升对不规则网格的处理效率》。特别感谢我的博士论文委员会以及所有在我`,
              linkText: "博士求学生涯中",
              img: require('@/assets/news/PhD-banquet.jpg'),
              linkColor: "#F56600",
              textAfter: "提供帮助的同学和朋友们！<em>路漫漫其修远兮，吾将上下而求索。</em>",
            },
            {
              date: "2024年10月15日",
                textBefore: `我以第二作者身份完成的论文在 <a href="https://ieeevis.org/year/2024/welcome" target="_blank"><img src="${require('@/assets/news/VIS-2024-logo.png')}" alt="IEEE VIS 2024 Logo" style="height:1.5em;vertical-align:middle;margin-left:2px;" /></a> 举办的<i>IEEE Workshop on Topological Data Analysis and Visualization（TopoInVis，拓扑数据分析与可视化研讨会）</i>获得了`,
              linkText: "<strong>最佳论文奖<strong>",
              img: require('@/assets/news/TopoInVis-2024-best-paper-award.jpg'),
              linkColor: "#52B9F5",
              textAfter: "。祝贺跃辉！同时我也感到非常荣幸能参与这个工作。",
            },
            {
              date: "2024年07月15日",
              text: `我获得了克莱姆森大学<a href="https://www.clemson.edu/research/division-of-research/resources/r-init-sub-pages/doctoral-dissertation-grant.html" target="_blank" style="color:#F56600;">博士论文结题资助</a>！期待今年晚些时候能完成博士学位论文的答辩。`,
            },
            {
              date: "2024年04月30日",
              text: "我顺利通过了博士论文开题报告！感谢我的博士论文委员会！",
            },
            {
              date: "2023年07月15日",
              text: `我以第一作者身份完成的论文 "<a href="https://arxiv.org/abs/2308.15638" target="_blank" style="color:#38381D;">A Task-Parallel Approach for Localized Topological Data Structures</a>" 已被 <a href="https://ieeevis.org/year/2023/welcome" target="_blank"><img src="${require('@/assets/news/VIS-2023-logo.svg')}" alt="IEEE VIS 2023 Logo" style="height:1.4em;vertical-align:middle;margin-left:2px;margin-right:2px;" /></a> 录用。感谢所有审稿人在评审过程中提出的宝贵修改意见。今年10月澳大利亚墨尔本见！`,
            },
            {
              date: "2022年04月28日",
              text: `我们的论文 <a href="https://arxiv.org/abs/2204.09783" target="_blank">"TopoEmbedding, A Web Tool for the Interactive Analysis of Persistent Homology"</a>《拓扑映射：对持续同调进行交互式分析的网络工具》已被 <a href="https://meetings.siam.org/program.cfm?CONFCODE=SDM22" target="_blank"><i>TDA Workshop at SIAM International Conference on Data Mining (SDM) 2022</i></a>（工业与应用数学学会国际数据挖掘大会——拓扑数据分析研讨会）录用。祝贺雪怡！`,
            },
            {
              date: "2022年01月26日",
              text: `我顺利通过了计算机学院的<a href="https://www.clemson.edu/cecas/departments/computing/academics/graduates/degrees/phd-cs.html#portfolioanddissertation" target="_blank">学术业绩评审</a>（博士资格考试），正式进入博士论文阶段。`,
            },
            {
              date: "2022年01月05日",
              text: `我们主导开发的高效拓扑数据结构 TopoCluster 已正式集成进 <a href="https://topology-tool-kit.github.io/" target="_blank"><img src="${require('@/assets/imgs/ttk-logo.png')}" alt="Topology Toolkit Logo" style="height:1.3em;vertical-align:middle;margin-left:2px;margin-right:2px;" />Topology Toolkit</a>（拓扑工具集），具体用法请见 <a href="https://topology-tool-kit.github.io/examples/compactTriangulation/" target="_blank">此示例页面</a>。特别感谢索邦大学的Julien Tierny博士和Pierre Guillou博士在整个过程中给予的宝贵帮助与支持。`,
            },
            {
              date: "2021年11月09日",
              text: `我之前发表于TVCG的论文被安排在 <a href="https://ieeevis.org/year/2022/welcome" target="_blank"><img src="${require('@/assets/news/VIS-2022-logo.svg')}" alt="IEEE VIS 2022 Logo" style="height:1.35em;vertical-align:middle;margin-left:2px;margin-right:2px;" /></a> 会议上报告。特别感谢主编沈汉威教授的推荐，明年俄克拉荷马城见！`
            },
            {
              date: "2021年10月15日",
              text: `我的第一篇一作论文 "<a href="https://doi.org/10.1109/TVCG.2021.3121229" target="_blank">TopoCluster: A Localized Data Structure for Topology-based Visualization</a>"《TopoCluster：面向拓扑可视化的局部性数据结构》已被 <i>IEEE Transactions on Visualization and Computer Graphics (TVCG)</i> 录用。感谢所有合作者和审稿人的贡献与努力。`
            },
            {
              date: "2021年07月16日",
              text: `我们在 <a href="https://gt-rl.github.io/2021/challenge.html" target="_blank"><i>ICLR Computational Geometry & Topology Challenge 2021</i></a>（ICLR几何与拓扑表示学习研讨会）提交的项目被收录进最终的白皮书。<a href="https://arxiv.org/abs/2108.09810" target="_blank">点击此链接</a>获取详细信息。虽然未能进入前三名，但整个参赛过程非常有趣。感谢主办方营造了如此富有创意和包容性的环境！`
            },
            {
              date: "2018年08月25日",
              text: "我即将开始在克莱姆森大学攻读博士学位！"
            }
          ]
        }
      },
    }
  },
  async mounted() {
    const counter = new Counter({
      workspace: "guoxi",
      debug: false,
      timeout: 5000,
    });
    try {
      const result = await counter.get('page-clicks');
      this.viewerCount = result.data.up_count;
    } catch (error) {
      console.error('Error incrementing counter:', error.message);
      throw error;
    }
  },
  computed: {
    lang() {
      return this.languageContent[this.language];
    },
    language() {
      return globalState.language;
    },
  },
  methods: {
    revealEmail() { this.showEmail = true; },
    hideEmail() { this.showEmail = false; },
    openOverlay(imgPath) { 
      this.overlayImgSrc = imgPath; 
      this.showOverlay = true; 
    },
    closeOverlay() { this.showOverlay = false; },
  },
};
</script>

<template>
  <div class="container">
    <div class="row h-100 w-100">
      <div class="col-md-4 my-4 d-flex align-items-start justify-content-center">
        <div class="w-100">
          <div class="card text-center shadow-sm w-100">
            <img
              src="@/assets/imgs/profile.png"
              class="card-img-top rounded-circle mx-auto mt-4"
              alt="Profile Picture"
              style="width: 160px; height: 160px; object-fit: cover;"
            >
            <div class="card-body">
              <h5 class="card-title">{{ lang.name }}</h5>
              {{ lang.title }}<br>
              <p style="color: #BA0C2F;">
                <a href="https://cse.osu.edu/" class="school-link-text" target="_blank">{{ lang.department }}</a><br>
                <a href="https://www.osu.edu/" class="school-link-text" target="_blank" style="display: inline-flex;">
                  <img 
                  src="@/assets/imgs/osu-logo.png" 
                  alt="Ohio State University Logo" 
                  class="school-link-img"
                  />
                  {{ lang.university }}
                </a>
              </p>
              <hr>
              {{ lang.previous }} <br>
              {{ lang.previousLab }}<br>
              <p style="color: #F56600;">
                <a href="https://computing.clemson.edu/" class="school-link-text" target="_blank">{{lang.previousDepartment}}</a><br>
                <a href="https://www.clemson.edu/" class="school-link-text" target="_blank" style="display: inline-flex;">
                  <img 
                  src="@/assets/imgs/clemson-logo.png" 
                  alt="Clemson University Logo" 
                  class="school-link-img"
                  />
                  {{ lang.previousUniversity }}
                </a>
              </p>
              <hr>
              <p class="mb-1"><strong>{{ lang.currentAddress}} </strong><br>
                <span v-html="lang.workAddress"></span>
              </p>
              <p class="mb-1">
                <strong>{{ lang.emailLabel }} </strong>
                <span
                  class="blur-on-hover"
                  @mouseenter="revealEmail"
                  @mouseleave="hideEmail"
                >
                  <template v-if="showEmail">
                    <a
                      :href="`mailto:${realEmailAddress}`"
                      style="text-decoration: underline;"
                    >
                      {{ realEmailAddress }}
                    </a>
                  </template>
                  <template v-else>
                    {{ protectedEmail }}
                  </template>
                </span>
              </p>
              <div class="mt-3">
                <a href="https://github.com/guoxiliu" target="_blank" class="ms-1" title="GitHub" style="color: black;">
                  <i class="fa-brands fa-github fs-4"></i>
                </a>
                <a href="https://scholar.google.com/citations?user=S83EyDgAAAAJ" target="_blank" class="ms-1" title="Google Scholar">
                  <i class="fa fa-graduation-cap fs-4"></i>
                </a>
                <a href="https://www.linkedin.com/in/liuguoxi" target="_blank" class="ms-1" title="LinkedIn">
                  <i class="fa-brands fa-linkedin fs-4"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="text-center mt-3 mb-2">
            <a href="https://mapmyvisitors.com/web/1byqh" title="Map My Visitors" style="display:inline-block; box-shadow:0 2px 8px rgba(0,0,0,0.08); border-radius:10px; overflow:hidden; background:#fff; padding:10px;">
              <img src="https://mapmyvisitors.com/map.png?cl=f5822f&w=312&t=tt&d=c1Aa0NlYq_4nd3vAMMpqm5eYGS2vsxlD2WtE0xHe9RI&co=ffffff&ct=000000" alt="Visitor Map" style="display:block; max-width:100%; height:auto; border-radius:8px;"/>
            </a>
          </div>
        </div>
      </div>

      <div class="col-md-8 my-4 d-flex align-items-center justify-content-center">
        <div class="card mx-4 w-90 shadow-sm">
          <div class="card-header">
            <p class="fs-3 my-1 px-2">{{ lang.aboutLabel }}</p>
          </div>
          <div class="card-body mx-2">
            <div v-for="(para, idx) in lang.aboutParagraphs" :key="idx">
              <p>
                <template v-for="(part, i) in para" :key="i">
                  <template v-if="typeof part === 'string'">
                    {{ part }}
                  </template>
                  <template v-else-if="part.type === 'span'">
                    <span :style="{ color: part.color, fontSize: part.fontSize, fontWeight: part.fontWeight }">{{ part.text }}</span>
                  </template>
                  <template v-else-if="part.type === 'a'">
                    <a :href="part.url" target="_blank" :style="{ color: part.color }">{{ part.text }}</a>
                  </template>
                  <template v-else-if="part.type === 'overlay'">
                    <a href="#" @click.prevent="openOverlay(part.img)" :style="{ color: part.color || 'inherit', textDecoration: 'underline', cursor: 'pointer' }">{{ part.text }}</a>
                  </template>
                  <template v-else-if="part.type === 'img'">
                    <span :style="{ color: part.color, display: 'inline-flex' }">
                      <img :src="part.src" :alt="part.alt" class="school-link-img" />
                      <template v-if="part.url">
                        <a :href="part.url" target="_blank" style="color: inherit;">{{ part.text }}</a>
                      </template>
                      <template v-else>
                        {{ part.text }}
                      </template>
                    </span>
                  </template>
                </template>
              </p>
            </div>
            <div v-if="lang.pets && lang.pets.length" class="d-flex flex-wrap gap-3 mt-2 mb-2">
              <div
                v-for="(pet, idx) in lang.pets"
                :key="`pet-${idx}`"
                class="pet-card text-center"
                @click="openOverlay(pet.img)"
              >
                <img :src="pet.img" :alt="pet.alt" class="pet-thumb" />
                <div class="small text-muted mt-1">{{ pet.name }}</div>
              </div>
            </div>
          </div>

          <div class="card-header">
            <p class="fs-3 my-1 px-2">{{ lang.newsLabel }}</p>
          </div>
          <div class="card-body mb-0 pb-1" style="max-height: 650px; overflow-y: auto;">
            <table class="table pb-0 mb-0">
              <!-- <colgroup>
                <col style="min-width: 120px; width: 140px; max-width: 200px;">
                <col>
              </colgroup> -->
              <tbody>
                <tr v-for="(item, index) in lang.news" :key="`news-${index}`">
                  <td
                    class="align-middle text-center
                      w-md-40"
                    style="min-width:140px; max-width:180px;"
                  >
                    {{ item.date }}
                  </td>
                  <td class="align-middle">
                    <span v-if="item.img">
                      <span v-html="item.textBefore"></span>
                      <a
                        href="#"
                        @click.prevent="openOverlay(item.img)"
                        :style="{ color: item.linkColor || 'inherit', textDecoration: 'underline', cursor: 'pointer' }"
                      >
                        <span v-html="item.linkText"></span>
                      </a>
                      <span v-html="item.textAfter"></span>
                    </span>
                    <span v-else v-html="item.text"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            v-if="showOverlay"
            class="overlay-backdrop"
            @click.self="closeOverlay"
          >
            <div class="overlay-modal-content">
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                @click="closeOverlay"
                style="position:absolute;top:10px;right:10px;z-index:2;"
              ></button>
                <img
                :src="overlayImgSrc"
                alt="Overlay Image"
                class="overlay-img"
                style="max-width: 100%; max-height: 80vh; width: auto; height: auto; display: block; margin: 0 auto;"
                />
            </div>
          </div>

          <!-- <div class="card-header mt-3">
            <h2>
              <template v-if="language === 'en'">Contact Me</template>
              <template v-else>联系方式</template>
            </h2>
            <p>
              <template v-if="language === 'en'">
                If you would like to get in touch, please reach out via email or connect with me on LinkedIn.
              </template>
              <template v-else>
                如需联系，请通过邮箱或LinkedIn与我取得联系。
              </template>
            </p>
          </div> -->
        </div>
      </div>
    </div>

  </div>
</template>
