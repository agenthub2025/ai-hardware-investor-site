const products = [
  {
    id: "ceo-pro",
    line: "CEO 盒子",
    tag: "主推款",
    name: "CEO Pro 桌面交互盒",
    color: "#0f766e",
    accent: "#dff5f1",
    price: "16,800 元",
    renewal: "6,980-12,800 元/年",
    hardwareCost: "4,000-6,000 元",
    costRatio: "24%-36%",
    hardwareTier: "B 档桌面交互盒",
    audience: "总裁班学员、企业老板、集团高管",
    positioning: "老板桌面的 AI 经营助理，主打会议、问数、经营简报和私有知识库。",
    summary: "带屏幕和麦克风的老板 AI 工作台，适合现场演示和总裁班成交。",
    filters: ["screen"],
    specs: ["8-10 英寸触摸屏", "麦克风阵列 + 扬声器", "低功耗主机", "本地加密缓存", "会议录音键", "远程运维"],
    features: ["会议转写、纪要和待办", "老板问数和资料库问答", "每日经营简报", "客户/项目情报摘要"],
    value: "客户购买的不是一台小电脑，而是一个每天可见、可问、可录、可提醒的经营工作台。",
    image: "./assets/product-ceo-pro.webp",
    visual: "screen"
  },
  {
    id: "office-gateway",
    line: "日常办公盒子",
    tag: "低门槛验证",
    name: "办公智能体包 / 网关盒",
    color: "#2563eb",
    accent: "#e5efff",
    price: "6,800-9,800 元",
    renewal: "4,980-9,800 元/年",
    hardwareCost: "0-2,000 元",
    costRatio: "0%-20%",
    hardwareTier: "无硬件或 A 档云端网关盒",
    audience: "HR、财务、采购、行政、项目助理",
    positioning: "企业职能部门的 AI 工作流工具，先用算薪、招采、制度问答验证付费意愿。",
    summary: "默认无屏，用 Web、PC 插件和企业微信降低硬件成本。",
    filters: [],
    specs: ["Web 工作台", "企业微信入口", "PC 插件可选", "低功耗网关盒可选", "本地缓存", "权限与日志"],
    features: ["算薪异常检查", "招采文件拆解", "制度问答", "合同初审", "部门知识库"],
    value: "用低价格快速证明单点场景价值，再向部门版和私有版升级。",
    image: "./assets/product-office-gateway.webp",
    visual: "gateway"
  },
  {
    id: "property-box",
    line: "物业盒子",
    tag: "垂类样板",
    name: "物业项目盒",
    color: "#d97706",
    accent: "#fff4dc",
    price: "24,800 元/项目",
    renewal: "9,800-16,800 元/年",
    hardwareCost: "5,000-6,000 元",
    costRatio: "20%-24%",
    hardwareTier: "B 档前台交互盒",
    audience: "物业公司、园区运营方、社区运营方",
    positioning: "物业项目的 AI 客服与工单中台，联动前台客服、报修、巡检、收费和看板。",
    summary: "前台需要可见界面和语音输入，适合带屏和麦克风。",
    filters: ["screen"],
    specs: ["前台触摸屏", "麦克风阵列", "扬声器", "项目知识库", "远程运维", "可选摄像头"],
    features: ["物业客服问答", "报修分类与派单建议", "收费催缴话术", "巡检记录", "项目经营看板"],
    value: "单项目跑通后，可复制到多项目运营盒，并通过物业协会做渠道放大。",
    image: "./assets/product-property-box.webp",
    visual: "kiosk"
  },
  {
    id: "construction-box",
    line: "建筑盒子",
    tag: "结果型收费",
    name: "建筑招采合同盒",
    color: "#7c3aed",
    accent: "#eee8ff",
    price: "29,800 元/项目",
    renewal: "12,800-19,800 元/年",
    hardwareCost: "2,000-8,000 元",
    costRatio: "7%-27%",
    hardwareTier: "A/C 档按资料量选择",
    audience: "建筑公司、工程项目部、项目管理公司",
    positioning: "工程项目的 AI 招采合同助手，主打招采拆解、合同风险和项目资料包。",
    summary: "屏幕不是核心，知识库、文档处理和项目结果才是价值。",
    filters: ["local"],
    specs: ["网关盒或轻算力盒", "32-64GB 可选", "项目资料库", "OCR/文档解析", "本地脱敏", "权限审计"],
    features: ["招标文件拆解", "供应商比价", "合同风险清单", "投标资料整理", "项目资料归档"],
    value: "用招采降本、合同风险和资料效率支撑项目制价格，而不是卖文档问答。",
    image: "./assets/product-construction-box.webp",
    visual: "workstation"
  },
  {
    id: "ceo-private",
    line: "CEO 盒子",
    tag: "高客单",
    name: "CEO Private 本地 AI 盒",
    color: "#0f766e",
    accent: "#dff5f1",
    price: "49,800-69,800 元",
    renewal: "19,800-39,800 元/年",
    hardwareCost: "14,000-24,000 元",
    costRatio: "28%-48%",
    hardwareTier: "D 档本地 AI 算力盒",
    audience: "对敏感经营数据有私有化要求的老板和集团客户",
    positioning: "具备本地知识库、本地推理和权限审计的高配 CEO 盒子。",
    summary: "只有客户明确要求本地数据和私有化时销售。",
    filters: ["screen", "local"],
    specs: ["Ryzen AI Max+ 395 或同级", "64-128GB 统一内存", "2TB SSD", "本地 RAG", "权限审计", "本地模型路由"],
    features: ["敏感会议本地加密", "本地经营资料库", "私有问数", "多角色权限", "审计日志"],
    value: "高价来自数据安全和本地闭环，不来自硬件溢价。",
    image: "./assets/product-ceo-private.webp",
    visual: "tower"
  }
];

const productGrid = document.querySelector("#productGrid");
const modal = document.querySelector("#productModal");
const modalBody = document.querySelector("#modalBody");
const modalClose = document.querySelector("#modalClose");
const filterButtons = document.querySelectorAll(".filter-button");

function productSvg(product, large = false) {
  const stroke = product.color;
  const fill = product.accent;
  const height = large ? 330 : 170;
  const width = 360;
  const label = large ? product.name : product.line;

  if (product.visual === "screen") {
    return `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${product.name} 产品示意图">
        <rect x="52" y="30" width="256" height="154" rx="26" fill="#111827"/>
        <rect x="78" y="58" width="204" height="86" rx="12" fill="${fill}" stroke="${stroke}"/>
        <text x="180" y="97" text-anchor="middle" font-size="24" font-weight="900" fill="${stroke}">AI Box</text>
        <text x="180" y="122" text-anchor="middle" font-size="12" fill="#334155">语音 · 小屏 · 会议</text>
        <rect x="138" y="184" width="84" height="22" rx="7" fill="#334155"/>
        <circle cx="88" cy="224" r="14" fill="${fill}" stroke="${stroke}" stroke-width="7"/>
        <circle cx="272" cy="224" r="14" fill="${fill}" stroke="${stroke}" stroke-width="7"/>
        <text x="180" y="${large ? 286 : 154}" text-anchor="middle" font-size="${large ? 18 : 0}" font-weight="800" fill="#111827">${large ? label : ""}</text>
      </svg>`;
  }

  if (product.visual === "gateway") {
    return `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${product.name} 产品示意图">
        <rect x="80" y="78" width="200" height="86" rx="14" fill="#111827"/>
        <rect x="106" y="106" width="42" height="22" rx="4" fill="${fill}" stroke="${stroke}"/>
        <rect x="160" y="106" width="42" height="22" rx="4" fill="${fill}" stroke="${stroke}"/>
        <rect x="220" y="101" width="30" height="32" rx="5" fill="#e2e8f0"/>
        <path d="M96 88 h168" stroke="#334155" stroke-width="3"/>
        <path d="M102 154 h156" stroke="#334155" stroke-width="4"/>
        <text x="180" y="53" text-anchor="middle" font-size="17" font-weight="900" fill="${stroke}">Gateway</text>
      </svg>`;
  }

  if (product.visual === "kiosk") {
    return `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${product.name} 产品示意图">
        <rect x="98" y="30" width="164" height="132" rx="18" fill="#111827"/>
        <rect x="118" y="52" width="124" height="70" rx="10" fill="${fill}" stroke="${stroke}"/>
        <text x="180" y="86" text-anchor="middle" font-size="18" font-weight="900" fill="${stroke}">Service</text>
        <text x="180" y="108" text-anchor="middle" font-size="11" fill="#334155">客服 · 工单</text>
        <rect x="130" y="162" width="100" height="18" rx="4" fill="#334155"/>
        <circle cx="254" cy="178" r="12" fill="${fill}" stroke="${stroke}" stroke-width="6"/>
        <rect x="120" y="188" width="120" height="24" rx="8" fill="#111827"/>
      </svg>`;
  }

  if (product.visual === "tower") {
    return `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${product.name} 产品示意图">
        <rect x="104" y="28" width="152" height="218" rx="20" fill="#f8fafc" stroke="${stroke}" stroke-width="3"/>
        <path d="M124 58 h112 M124 78 h112 M124 98 h112" stroke="#cbd5e1" stroke-width="5"/>
        <rect x="132" y="126" width="96" height="72" rx="12" fill="${fill}" stroke="${stroke}"/>
        <text x="180" y="166" text-anchor="middle" font-size="22" font-weight="900" fill="${stroke}">Local AI</text>
        <circle cx="154" cy="222" r="6" fill="${stroke}"/>
        <rect x="172" y="216" width="34" height="12" rx="3" fill="#334155"/>
        <text x="180" y="${large ? 292 : 0}" text-anchor="middle" font-size="${large ? 17 : 0}" font-weight="800" fill="#111827">${large ? "本地推理 · 私有知识库" : ""}</text>
      </svg>`;
  }

  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${product.name} 产品示意图">
      <rect x="70" y="48" width="220" height="130" rx="16" fill="${fill}" stroke="${stroke}" stroke-width="3"/>
      <path d="M110 88 h140 M110 116 h100 M110 144 h120" stroke="${stroke}" stroke-width="8" stroke-linecap="round"/>
      <text x="180" y="220" text-anchor="middle" font-size="16" font-weight="800" fill="#111827">Project AI</text>
    </svg>`;
}

function productImage(product, large = false) {
  if (!product.image) return productSvg(product, large);
  const className = large ? "product-photo large" : "product-photo";
  const loading = large ? "eager" : "lazy";
  return `<img class="${className}" src="${product.image}" alt="${product.name} 产品渲染图" loading="${loading}">`;
}

function productCard(product) {
  return `
    <article class="product-card" data-filters="${product.filters.join(" ")}">
      <button type="button" data-product="${product.id}" aria-label="查看 ${product.name} 详情">
        <div class="product-visual">${productImage(product)}</div>
        <div class="product-content">
          <span class="line-tag" style="background:${product.color}">${product.tag}</span>
          <h3>${product.name}</h3>
          <p>${product.summary}</p>
          <div class="price-row">
            <strong>${product.price}</strong>
            <span>${product.hardwareTier}<br>成本占比 ${product.costRatio}</span>
          </div>
        </div>
      </button>
    </article>`;
}

function renderProducts(filter = "all") {
  const visible = products.filter((product) => {
    if (filter === "all") return true;
    return product.filters.includes(filter);
  });
  productGrid.innerHTML = visible.map(productCard).join("");
}

function openProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  modalBody.innerHTML = `
    <div class="modal-visual">${productImage(product, true)}</div>
    <div class="modal-detail">
      <span class="line-tag" style="background:${product.color}">${product.line}</span>
      <h2 id="modalTitle">${product.name}</h2>
      <p class="intro">${product.positioning}</p>
      <div class="detail-grid">
        <div class="detail-item"><span>首年价格</span><strong>${product.price}</strong></div>
        <div class="detail-item"><span>年续费</span><strong>${product.renewal}</strong></div>
        <div class="detail-item"><span>硬件成本</span><strong>${product.hardwareCost}</strong></div>
        <div class="detail-item"><span>成本占比</span><strong>${product.costRatio}</strong></div>
        <div class="detail-item"><span>硬件档位</span><strong>${product.hardwareTier}</strong></div>
        <div class="detail-item"><span>目标客户</span><strong>${product.audience}</strong></div>
      </div>
      <div class="modal-list">
        <span>详细配置</span>
        <ul>${product.specs.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="modal-list">
        <span>核心功能</span>
        <ul>${product.features.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="modal-list">
        <span>投资人关注点</span>
        <strong>${product.value}</strong>
      </div>
    </div>`;

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product]");
  if (!button) return;
  openProduct(button.dataset.product);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

renderProducts();

const initialParams = new URLSearchParams(window.location.search);
const initialProduct = initialParams.get("product");
if (initialProduct) {
  window.setTimeout(() => openProduct(initialProduct), 120);
}

function initTypewriter() {
  const target = document.querySelector("[data-typewriter]");
  if (!target) return;

  const text = target.dataset.typewriter || "";
  let index = 0;
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  cursor.setAttribute("aria-hidden", "true");

  window.setTimeout(() => {
    const timer = window.setInterval(() => {
      index += 1;
      target.textContent = text.slice(0, index);
      if (index < text.length) {
        target.appendChild(cursor);
      } else {
        window.clearInterval(timer);
      }
    }, 38);
  }, 500);
}

function initHeroVideoScrub() {
  const video = document.querySelector(".hero-video");
  if (!video) return;

  const sensitivity = 0.8;
  let previousX = null;
  let targetTime = 0;
  let isSeeking = false;
  let hasMetadata = false;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  function seekWhenReady() {
    if (!hasMetadata || isSeeking || !Number.isFinite(video.duration) || video.duration <= 0) return;
    if (Math.abs(video.currentTime - targetTime) < 0.025) return;
    isSeeking = true;
    try {
      video.currentTime = clamp(targetTime, 0, video.duration);
    } catch (error) {
      isSeeking = false;
    }
  }

  video.addEventListener("loadedmetadata", () => {
    hasMetadata = true;
    targetTime = Math.min(video.duration * 0.16, video.duration);
    seekWhenReady();
  });

  video.addEventListener("seeked", () => {
    isSeeking = false;
    seekWhenReady();
  });

  window.addEventListener("mousemove", (event) => {
    if (previousX == null) {
      previousX = event.clientX;
      return;
    }

    const delta = event.clientX - previousX;
    previousX = event.clientX;

    if (!hasMetadata || !Number.isFinite(video.duration) || video.duration <= 0) return;
    targetTime = clamp(
      targetTime + (delta / window.innerWidth) * sensitivity * video.duration,
      0,
      video.duration
    );
    seekWhenReady();
  }, { passive: true });
}

initTypewriter();
initHeroVideoScrub();
