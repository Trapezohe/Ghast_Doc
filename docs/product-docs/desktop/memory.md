---
title: Memory 记忆
description: Ghast 如何跨会话记住重要的事——写入路径、召回、嵌入、管理面板。
---

# Memory 记忆

Memory 是让 Ghast 成为长期伙伴而不是临时聊天本子的关键。它是一个本地向量数据库，存储 Agent 关于你工作、偏好、未结流的学习，每次新对话都做语义召回。

## 一条记忆怎么生成

三条写入路径：

| 路径 | 触发条件 |
| --- | --- |
| **对话中显式写入** | 你让 Agent 记住某事，或它建议记住而你同意了。 |
| **由活动记录触发** | 后台活动（窗口聚焦、触碰过的文件、URL）偶尔会被摘要为候选记忆。 |
| **手动** | Settings → Memory → Add，直接输入文本。 |

每条记忆记录包含：

- 文本。
- 来源标签（对话 / 活动 / 手动）。
- 可选用户标签。
- 用于语义召回的向量 embedding。
- 访问计数器（召回时递增）。
- 时间戳。

## 召回如何工作

新开对话或 thread fork 时发第一条消息：

1. 用配置的 embedding 模型对第一条消息做嵌入。
2. Ghast 在本地 sqlite-vec 索引里查最近邻（余弦相似度）。
3. 阈值（默认 0.75）以上的命中被采纳。
4. 它们以 "memory retrieval" 阶段卡的形式短暂显示在响应卡片上方，并被注入模型上下文。

展开阶段卡可以看到具体被召回的是哪些记忆。

## Embedding 模型

默认情况下，Ghast 使用主进程里运行的本地 Transformers 模型（每次查询无需网络往返）。可在 Settings → Memory 切换为远程 embedding 供应商（如 OpenAI Embeddings）。

切换 embedding 供应商时，Ghast 会：

- 弹窗确认。
- 把已有记忆标记为待重新嵌入。
- 后台执行 re-embedding。

re-embedding 期间，召回会同时查询新旧 embeddings；完成后只查新索引。

## 合并 (Consolidation)

后台合并器定期：

- 识别重叠的记忆（"用户喜欢深色模式"被三种不同方式记录）。
- 把零碎片段摘要为更高层的事实。
- 把被涵盖的旧记忆标记为 archived（不删除，可在面板里用过滤器查看）。

合并按计划运行，也可在面板手动触发。它不会未经你同意删除记忆，只 archive。

## Memory 面板

Settings → Memory 显示：

| 元素 | 你能做什么 |
| --- | --- |
| **统计** | 总记忆数、已索引数、上次合并时间 |
| **搜索** | 跨所有记忆的语义搜索（用同一套嵌入流水线） |
| **列表** | 浏览，按来源 / 标签 / 日期过滤 |
| **编辑** | 点开一条记忆改文本或标签。保存时重算 embedding。 |
| **删除** | 软删除。在合并最终确认前可恢复。 |
| **新增** | 直接输入新记忆。 |
| **合并器** | 立刻跑一次合并；看会合并哪些。 |

## 存什么、看什么

一条记忆记录可以包含任何 Agent 或你选择的文本。常见形式：

- "Songsu 在做 Ghast Desktop，deadline 三月中旬。"
- "Discord 里偏好中文回复，主对话窗用英文。"
- "除非我主动提，不要建议做 LinkedIn outreach。"

Agent 把记忆当作软性上下文，不是硬性规则。它会影响语气、优先级、主动行为，但当前轮次里的显式指令可以覆盖它。

Partner Mode 用户的记忆会与"用户理解模型" (UUM) 及其严格的字段白名单交互。见 [Partner Mode：用户理解模型 (UUM)](/cn/partner-mode/uum)。

## 隐私

- 记忆默认在本地。存在 `<profile>/ghast.db`。
- 仅当你在 Settings → Data → 0G Storage Sync 中为 Memories 类别开启同步时，记忆才会同步到 0G Storage。端到端加密，密钥来自钱包。
- Agent 不会未经轮次显式要求就把记忆外发到远程频道。

## 相关页面

- [对话与输入框](/cn/desktop/chat-and-composer)
- [活动记录](/cn/desktop/activity-recorder)
- [设置总览](/cn/desktop/settings-overview)
- [0G Storage 加密同步](/cn/web3/0g-storage-sync)
- [参考：内置技能清单](/cn/reference/bundled-skills)
