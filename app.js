/* ============================================
   LUXMART — app.js
   보안 관제 실습용 쇼핑몰 자바스크립트
   ============================================ */

/* ============================================
   상품 데이터
   ============================================ */
const PRODUCTS = [
  // 패션
  { id: 1, name: '클래식 울 코트 (베이지)', category: 'fashion', emoji: '🧥', price: 189000, original: 280000, discount: 33, rating: 4.8, reviews: 342, badge: 'sale', desc: '프리미엄 울 혼방 소재로 제작된 클래식 코트입니다. 어떤 스타일에도 잘 어울리는 베이지 컬러.' },
  { id: 2, name: '슬림핏 청바지 (다크 인디고)', category: 'fashion', emoji: '👖', price: 79000, original: 79000, discount: 0, rating: 4.6, reviews: 890, badge: 'hot', desc: '스트레치 소재로 편안한 착용감을 제공하는 슬림핏 청바지. 데일리룩으로 완벽합니다.' },
  { id: 3, name: '오버사이즈 후드 집업', category: 'fashion', emoji: '🧶', price: 65000, original: 89000, discount: 27, rating: 4.5, reviews: 567, badge: 'new', desc: '트렌디한 오버사이즈 실루엣의 후드 집업. 부드러운 기모 안감으로 따뜻합니다.' },
  { id: 4, name: '레더 크로스백 (브라운)', category: 'fashion', emoji: '👜', price: 135000, original: 200000, discount: 33, rating: 4.9, reviews: 234, badge: 'sale', desc: '고급 PU 레더로 제작된 크로스백. 넉넉한 수납공간과 세련된 디자인을 갖추었습니다.' },
  { id: 5, name: '화이트 스니커즈 (클린핏)', category: 'fashion', emoji: '👟', price: 99000, original: 149000, discount: 34, rating: 4.7, reviews: 1203, badge: 'hot', desc: '클린한 화이트 컬러의 데일리 스니커즈. 어떤 코디에도 잘 어울리는 필수 아이템.' },
  { id: 6, name: '실크 블라우스 (아이보리)', category: 'fashion', emoji: '👚', price: 58000, original: 85000, discount: 32, rating: 4.4, reviews: 178, badge: 'new', desc: '부드러운 실크 터치의 블라우스. 오피스룩에서 데이트룩까지 다양하게 활용 가능.' },

  // 뷰티
  { id: 7, name: '히알루론산 세럼 (50ml)', category: 'beauty', emoji: '💧', price: 38000, original: 58000, discount: 34, rating: 4.9, reviews: 2341, badge: 'hot', desc: '고농축 히알루론산 성분으로 깊은 수분 공급. 속건성 제형으로 빠르게 흡수됩니다.' },
  { id: 8, name: '멀티 팔레트 쉐도우 (18컬러)', category: 'beauty', emoji: '💄', price: 42000, original: 65000, discount: 35, rating: 4.7, reviews: 986, badge: 'sale', desc: '일상부터 스모키까지 다양한 연출이 가능한 18컬러 팔레트. 발색력과 지속력이 탁월합니다.' },
  { id: 9, name: '선크림 SPF50+ PA++++ (70ml)', category: 'beauty', emoji: '☀️', price: 25000, original: 25000, discount: 0, rating: 4.8, reviews: 3412, badge: 'hot', desc: '미백 + 자외선 차단 2in1 선크림. 백탁 없는 투명한 발림성으로 매일 사용 가능.' },
  { id: 10, name: '퍼퓸 오 드 뚜왈렛 (100ml)', category: 'beauty', emoji: '🌸', price: 89000, original: 120000, discount: 26, rating: 4.6, reviews: 445, badge: 'new', desc: '플로럴 우디 계열의 고급 향수. 은은한 잔향이 오래 지속되어 특별한 날에 어울립니다.' },
  { id: 11, name: '컬링 마스카라 (블랙)', category: 'beauty', emoji: '👁️', price: 18000, original: 26000, discount: 31, rating: 4.5, reviews: 1567, badge: 'sale', desc: '볼륨 컬 마스카라로 눈매를 또렷하게. 워터프루프 포뮬라로 지속력이 뛰어납니다.' },
  { id: 12, name: '레티놀 나이트크림 (50ml)', category: 'beauty', emoji: '🌙', price: 55000, original: 80000, discount: 31, rating: 4.7, reviews: 678, badge: 'new', desc: '레티놀 0.1% 함유로 탄력과 주름 개선에 탁월. 자는 동안 피부를 리뉴얼합니다.' },

  // 전자기기
  { id: 13, name: '무선 블루투스 이어폰 PRO', category: 'electronics', emoji: '🎧', price: 159000, original: 249000, discount: 36, rating: 4.8, reviews: 1892, badge: 'hot', desc: 'ANC 액티브 노이즈 캔슬링 탑재. 30시간 배터리 수명과 완벽한 음질을 경험하세요.' },
  { id: 14, name: '스마트워치 Series X', category: 'electronics', emoji: '⌚', price: 299000, original: 399000, discount: 25, rating: 4.7, reviews: 934, badge: 'new', desc: '심박수, 혈중 산소, GPS를 탑재한 올인원 스마트워치. 7일 배터리 수명.' },
  { id: 15, name: '보조배터리 20000mAh', category: 'electronics', emoji: '🔋', price: 45000, original: 70000, discount: 36, rating: 4.6, reviews: 2341, badge: 'sale', desc: 'PD 65W 고속충전을 지원하는 대용량 보조배터리. 노트북도 충전 가능합니다.' },
  { id: 16, name: '미니 블루투스 스피커', category: 'electronics', emoji: '🔊', price: 69000, original: 100000, discount: 31, rating: 4.5, reviews: 567, badge: 'hot', desc: '360도 서라운드 사운드와 방수 기능을 갖춘 컴팩트 블루투스 스피커. 야외 활동에 최적.' },
  { id: 17, name: '스마트 LED 스트립 (10m)', category: 'electronics', emoji: '💡', price: 35000, original: 50000, discount: 30, rating: 4.4, reviews: 890, badge: 'new', desc: '앱 제어 가능한 RGB LED 스트립. 음악에 맞춰 색상이 변하는 뮤직 싱크 기능 탑재.' },
  { id: 18, name: '기계식 게이밍 키보드', category: 'electronics', emoji: '⌨️', price: 129000, original: 180000, discount: 28, rating: 4.8, reviews: 1234, badge: 'hot', desc: '청축 기계식 스위치와 RGB 백라이트를 탑재한 게이밍 키보드. 타건감이 탁월합니다.' },

  // 라이프
  { id: 19, name: '아로마 디퓨저 (우드형)', category: 'life', emoji: '🌿', price: 42000, original: 65000, discount: 35, rating: 4.7, reviews: 456, badge: 'new', desc: '천연 우드 소재의 초음파 아로마 디퓨저. 은은한 향기로 공간을 채워드립니다.' },
  { id: 20, name: '캠핑 체어 (경량 접이식)', category: 'life', emoji: '🪑', price: 55000, original: 85000, discount: 35, rating: 4.6, reviews: 789, badge: 'sale', desc: '1.2kg 초경량 알루미늄 프레임의 접이식 캠핑 의자. 수납 파우치 포함.' },
  { id: 21, name: '요가매트 (TPE 6mm)', category: 'life', emoji: '🧘', price: 38000, original: 55000, discount: 31, rating: 4.5, reviews: 1023, badge: 'hot', desc: '친환경 TPE 소재로 제작된 요가매트. 미끄럼 방지와 관절 보호를 위한 최적 두께.' },
  { id: 22, name: '핸드드립 커피세트', category: 'life', emoji: '☕', price: 89000, original: 120000, discount: 26, rating: 4.9, reviews: 345, badge: 'new', desc: '드리퍼, 서버, 그라인더가 포함된 핸드드립 풀세트. 집에서 카페 커피를 즐겨보세요.' },

  // 식품
  { id: 23, name: '제주 감귤 (3kg)', category: 'food', emoji: '🍊', price: 22000, original: 32000, discount: 31, rating: 4.8, reviews: 2341, badge: 'hot', desc: '당도 높은 제주산 감귤. 산지 직송으로 신선한 감귤을 집에서 받아보세요.' },
  { id: 24, name: '프리미엄 혼합 견과류 (500g)', category: 'food', emoji: '🥜', price: 18000, original: 28000, discount: 36, rating: 4.7, reviews: 1567, badge: 'sale', desc: '호두, 아몬드, 캐슈넛, 피스타치오가 담긴 프리미엄 혼합 견과류. 무염·무설탕.' },
  { id: 25, name: '유기농 그린 스무디 파우더', category: 'food', emoji: '🥤', price: 35000, original: 48000, discount: 27, rating: 4.6, reviews: 678, badge: 'new', desc: '케일, 시금치, 브로콜리를 동결건조한 유기농 스무디 파우더. 아침 건강 루틴에 추천.' },
  { id: 26, name: '수제 요거트 그래놀라 (400g)', category: 'food', emoji: '🥣', price: 16000, original: 22000, discount: 27, rating: 4.5, reviews: 890, badge: 'hot', desc: '귀리, 견과류, 건과일을 넣어 직접 구운 수제 그래놀라. 방부제 없는 건강한 아침식사.' },

  // 세일
  { id: 27, name: '패션 5종 번들 세트', category: 'sale', emoji: '🛍️', price: 149000, original: 400000, discount: 63, rating: 4.6, reviews: 234, badge: 'sale', desc: '인기 상품 5종을 담은 특가 번들. 티셔츠, 슬랙스, 양말, 벨트, 손수건 구성.' },
  { id: 28, name: '뷰티 스킨케어 3종 세트', category: 'sale', emoji: '🧴', price: 59000, original: 150000, discount: 61, rating: 4.8, reviews: 567, badge: 'sale', desc: '토너, 세럼, 크림이 포함된 3단계 스킨케어 세트. 촉촉한 피부를 위한 최적의 구성.' },
];

/* ============================================
   앱 상태 (State)
   ============================================ */
let state = {
  cart: [],
  wishlist: [],
  currentUser: null,
  currentCategory: 'all',
  currentSearch: '',
  currentSort: 'default',
  currentView: 'grid',
  currentSlide: 0,
  slideTimer: null,
  productModalData: null,
  productModalQty: 1,
};

/* ============================================
   유틸리티
   ============================================ */
function showToast(msg, type = '') {
  const wrap = document.getElementById('toastWrap');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = msg;
  wrap.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function formatPrice(p) {
  return '₩' + p.toLocaleString('ko-KR');
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '½';
  return s;
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('show'));
  document.body.style.overflow = '';
}

function openModal(id) {
  closeAllModals();
  document.getElementById(id).classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('show');
  document.body.style.overflow = '';
}

function switchModal(from, to) {
  closeModal(from);
  openModal(to);
}

/* ============================================
   로그인 / 회원가입
   ============================================ */
function handleLogin() {
  const id = document.getElementById('loginId').value.trim();
  const pw = document.getElementById('loginPw').value.trim();

  if (!id || !pw) {
    showToast('<i class="fa fa-exclamation-circle"></i> 아이디와 비밀번호를 입력해주세요', 'error');
    return;
  }

  // [보안 관제 실습] 기본 로그인 처리 (실제 서버 없이 시뮬레이션)
  const fakeUser = { id, name: id.split('@')[0] || id, email: id };
  state.currentUser = fakeUser;

  // UI 업데이트
  document.getElementById('loginBtn').style.display = 'none';
  document.getElementById('registerBtn').style.display = 'none';
  document.getElementById('logoutBtn').style.display = '';
  document.getElementById('mypageBtn').style.display = '';
  document.getElementById('mypageBtn').textContent = `${fakeUser.name}님`;

  closeModal('loginModal');
  showToast(`<i class="fa fa-check-circle"></i> ${fakeUser.name}님, 환영합니다!`, 'success');

  // 로그 기록 (보안 관제 실습용)
  logSecurityEvent('LOGIN_ATTEMPT', { userId: id, timestamp: new Date().toISOString(), ip: '192.168.1.1' });
}

function handleLogout() {
  state.currentUser = null;
  document.getElementById('loginBtn').style.display = '';
  document.getElementById('registerBtn').style.display = '';
  document.getElementById('logoutBtn').style.display = 'none';
  document.getElementById('mypageBtn').style.display = 'none';
  showToast('<i class="fa fa-sign-out-alt"></i> 로그아웃 되었습니다');
  logSecurityEvent('LOGOUT', { timestamp: new Date().toISOString() });
}

function handleRegister() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pw = document.getElementById('regPw').value;
  const pwc = document.getElementById('regPwConfirm').value;
  const agreeItems = document.querySelectorAll('.agree-item');
  const required = [agreeItems[0], agreeItems[1]];

  if (!name || !email || !pw) {
    showToast('<i class="fa fa-exclamation-circle"></i> 필수 항목을 모두 입력해주세요', 'error');
    return;
  }
  if (pw !== pwc) {
    showToast('<i class="fa fa-exclamation-circle"></i> 비밀번호가 일치하지 않습니다', 'error');
    return;
  }
  if (!required[0].checked || !required[1].checked) {
    showToast('<i class="fa fa-exclamation-circle"></i> 필수 약관에 동의해주세요', 'error');
    return;
  }

  closeModal('registerModal');
  showToast('<i class="fa fa-gift"></i> 회원가입 완료! 5,000원 쿠폰이 지급되었습니다', 'success');
  logSecurityEvent('REGISTER', { name, email, timestamp: new Date().toISOString() });

  // 자동 로그인
  state.currentUser = { id: email, name, email };
  document.getElementById('loginBtn').style.display = 'none';
  document.getElementById('registerBtn').style.display = 'none';
  document.getElementById('logoutBtn').style.display = '';
  document.getElementById('mypageBtn').style.display = '';
  document.getElementById('mypageBtn').textContent = `${name}님`;
}

function checkEmail() {
  const email = document.getElementById('regEmail').value.trim();
  if (!email) { showToast('이메일을 먼저 입력해주세요', 'error'); return; }
  showToast('<i class="fa fa-check-circle"></i> 사용 가능한 이메일입니다', 'success');
}

function sendResetEmail() {
  const email = document.getElementById('findEmail').value.trim();
  if (!email) { showToast('이메일을 입력해주세요', 'error'); return; }
  showToast(`<i class="fa fa-envelope"></i> ${email}로 임시 비밀번호를 발송했습니다`, 'success');
  closeModal('findPwModal');
  logSecurityEvent('PASSWORD_RESET_REQUEST', { email, timestamp: new Date().toISOString() });
}

function socialLogin(provider) {
  showToast(`<i class="fa fa-spinner fa-spin"></i> ${provider} 로그인 중...`);
  setTimeout(() => {
    state.currentUser = { id: `${provider}_user`, name: `${provider}회원`, email: `user@${provider}.com` };
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('registerBtn').style.display = 'none';
    document.getElementById('logoutBtn').style.display = '';
    document.getElementById('mypageBtn').style.display = '';
    document.getElementById('mypageBtn').textContent = `${provider}회원님`;
    closeModal('loginModal');
    showToast(`<i class="fa fa-check-circle"></i> ${provider}로 로그인 되었습니다`, 'success');
  }, 1000);
}

function toggleAllAgree(cb) {
  document.querySelectorAll('.agree-item').forEach(el => el.checked = cb.checked);
}

function checkPwStrength(pw) {
  const bar = document.getElementById('pwBar');
  const msg = document.getElementById('pwMsg');
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const colors = ['#e53935', '#ff9800', '#fbc02d', '#43a047'];
  const labels = ['매우 약함', '약함', '보통', '강함'];
  bar.style.width = (score / 4 * 100) + '%';
  bar.style.background = colors[score - 1] || '#eee';
  msg.textContent = pw ? `비밀번호 강도: ${labels[score - 1] || '입력 중'}` : '';
}

function fakeAddrSearch() {
  const addrs = ['서울특별시 강남구 테헤란로 123', '서울특별시 마포구 월드컵북로 456', '경기도 성남시 분당구 판교역로 789'];
  const picked = addrs[Math.floor(Math.random() * addrs.length)];
  document.getElementById('regAddr').value = picked;
  showToast('주소가 선택되었습니다');
}

/* ============================================
   상품 렌더링
   ============================================ */
function getFilteredProducts() {
  let list = [...PRODUCTS];

  if (state.currentCategory !== 'all') {
    list = list.filter(p => p.category === state.currentCategory);
  }
  if (state.currentSearch) {
    const q = state.currentSearch.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
  }

  switch (state.currentSort) {
    case 'price-asc': list.sort((a, b) => a.price - b.price); break;
    case 'price-desc': list.sort((a, b) => b.price - a.price); break;
    case 'rating': list.sort((a, b) => b.rating - a.rating); break;
    case 'new': list.sort((a, b) => b.id - a.id); break;
  }
  return list;
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const noResult = document.getElementById('noResult');
  const countEl = document.getElementById('productCount');
  const list = getFilteredProducts();

  if (list.length === 0) {
    grid.innerHTML = '';
    noResult.style.display = 'block';
    countEl.textContent = '';
    return;
  }
  noResult.style.display = 'none';
  countEl.textContent = `총 ${list.length}개 상품`;

  grid.innerHTML = list.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.04}s" onclick="openProductModal(${p.id})">
      <div class="product-img">
        ${p.badge ? `<div class="product-badges"><span class="badge-tag badge-${p.badge}">${p.badge === 'new' ? 'NEW' : p.badge === 'hot' ? 'HOT' : 'SALE'}</span></div>` : ''}
        <button class="wish-btn ${state.wishlist.includes(p.id) ? 'active' : ''}" onclick="toggleWish(event, ${p.id})">
          <i class="fa${state.wishlist.includes(p.id) ? 's' : 'r'} fa-heart"></i>
        </button>
        ${p.emoji}
      </div>
      <div class="product-info">
        <div class="product-cat">${getCatLabel(p.category)}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span class="rating-num">${p.rating} (${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-wrap">
          <span class="product-price">${formatPrice(p.price)}</span>
          ${p.discount > 0 ? `<span class="product-original">${formatPrice(p.original)}</span><span class="product-discount">-${p.discount}%</span>` : ''}
        </div>
      </div>
      <div class="product-card-footer">
        <button class="btn-cart" onclick="addToCart(event, ${p.id})"><i class="fa fa-cart-plus"></i> 장바구니</button>
        <button class="btn-wish-add" onclick="toggleWish(event, ${p.id})"><i class="fa fa-heart"></i></button>
      </div>
    </div>
  `).join('');
}

function getCatLabel(cat) {
  const map = { fashion: '패션', beauty: '뷰티', electronics: '전자기기', life: '라이프', food: '식품', sale: '특가 SALE', sport: '스포츠' };
  return map[cat] || cat;
}

/* ============================================
   카테고리 / 검색 / 정렬
   ============================================ */
function filterCategory(cat) {
  state.currentCategory = cat;
  state.currentSearch = '';
  document.getElementById('searchInput').value = '';
  const titles = { all: '인기 상품', fashion: '패션', beauty: '뷰티', electronics: '전자기기', life: '라이프', food: '식품', sport: '스포츠', sale: '🔥 SALE 특가' };
  document.getElementById('sectionTitle').textContent = titles[cat] || cat;
  renderProducts();
  document.getElementById('mainContent').scrollIntoView({ behavior: 'smooth' });
  logSecurityEvent('CATEGORY_VIEW', { category: cat, timestamp: new Date().toISOString() });
}

function doSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (!q) { filterCategory('all'); return; }
  state.currentSearch = q;
  state.currentCategory = 'all';
  document.getElementById('sectionTitle').textContent = `"${q}" 검색 결과`;
  renderProducts();
  hideSuggest();
  document.getElementById('mainContent').scrollIntoView({ behavior: 'smooth' });
  logSecurityEvent('SEARCH', { query: q, timestamp: new Date().toISOString() });
}

function showSearchSuggest(val) {
  const box = document.getElementById('searchSuggest');
  if (!val.trim()) { hideSuggest(); return; }
  const keywords = ['패션', '뷰티', '스킨케어', '청바지', '코트', '이어폰', '스마트워치', '커피', '견과류', '요가매트', '디퓨저', '운동화'];
  const matched = keywords.filter(k => k.includes(val));
  const prods = PRODUCTS.filter(p => p.name.toLowerCase().includes(val.toLowerCase())).slice(0, 4);

  if (!matched.length && !prods.length) { hideSuggest(); return; }

  let html = '';
  if (matched.length) html += matched.map(k => `<div class="suggest-item" onclick="selectSuggest('${k}')"><i class="fa fa-search"></i> ${k}</div>`).join('');
  if (prods.length) html += prods.map(p => `<div class="suggest-item" onclick="selectSuggest('${p.name}')">${p.emoji} ${p.name} — ${formatPrice(p.price)}</div>`).join('');

  box.innerHTML = html;
  box.classList.add('show');
}

function selectSuggest(val) {
  document.getElementById('searchInput').value = val;
  hideSuggest();
  doSearch();
}

function hideSuggest() {
  document.getElementById('searchSuggest').classList.remove('show');
}

function sortProducts(val) {
  state.currentSort = val;
  renderProducts();
}

function setView(type) {
  state.currentView = type;
  const grid = document.getElementById('productGrid');
  grid.classList.toggle('list-view', type === 'list');
  document.getElementById('gridViewBtn').classList.toggle('active', type === 'grid');
  document.getElementById('listViewBtn').classList.toggle('active', type === 'list');
}

function goHome() {
  state.currentCategory = 'all';
  state.currentSearch = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('sectionTitle').textContent = '인기 상품';
  document.getElementById('heroSection').scrollIntoView({ behavior: 'smooth' });
  renderProducts();
}

/* ============================================
   장바구니
   ============================================ */
function addToCart(e, id) {
  if (e) e.stopPropagation();
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;
  const existing = state.cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else state.cart.push({ ...p, qty: 1 });
  updateCartUI();
  showToast(`<i class="fa fa-check-circle"></i> <b>${p.name}</b>이(가) 장바구니에 담겼습니다`, 'success');
  logSecurityEvent('ADD_TO_CART', { productId: id, productName: p.name, price: p.price });
}

function updateCartUI() {
  const total = state.cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cartCount').textContent = total;
  document.getElementById('cartCountSide').textContent = total;

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  if (!state.cart.length) {
    itemsEl.innerHTML = '<p class="cart-empty"><i class="fa fa-shopping-bag"></i><br/>장바구니가 비어 있습니다</p>';
    footerEl.style.display = 'none';
    return;
  }

  itemsEl.innerHTML = state.cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-img">${c.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-price">${formatPrice(c.price)}</div>
        <div class="cart-item-qty">수량: ${c.qty}개</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end">
        <button class="cart-item-remove" onclick="removeFromCart(${c.id})"><i class="fa fa-times"></i></button>
        <div style="display:flex;gap:6px;align-items:center">
          <button style="width:24px;height:24px;border:1px solid #ddd;border-radius:50%;font-size:14px" onclick="changeCartQty(${c.id},-1)">−</button>
          <span style="font-size:13px;font-weight:600">${c.qty}</span>
          <button style="width:24px;height:24px;border:1px solid #ddd;border-radius:50%;font-size:14px" onclick="changeCartQty(${c.id},1)">+</button>
        </div>
      </div>
    </div>
  `).join('');

  const totalPrice = state.cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById('cartTotal').textContent = formatPrice(totalPrice);
  footerEl.style.display = 'block';
}

function removeFromCart(id) {
  state.cart = state.cart.filter(c => c.id !== id);
  updateCartUI();
}

function changeCartQty(id, delta) {
  const item = state.cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  updateCartUI();
}

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  overlay.classList.toggle('show', !isOpen);
}

function checkout() {
  if (!state.currentUser) {
    showToast('<i class="fa fa-exclamation-circle"></i> 로그인 후 주문하실 수 있습니다', 'error');
    toggleCart();
    openModal('loginModal');
    return;
  }
  const totalPrice = state.cart.reduce((s, c) => s + c.price * c.qty, 0);
  showToast(`<i class="fa fa-credit-card"></i> ${formatPrice(totalPrice)} 결제 페이지로 이동합니다`, 'success');
  logSecurityEvent('CHECKOUT_ATTEMPT', { total: totalPrice, items: state.cart.length, timestamp: new Date().toISOString() });
  toggleCart();
}

/* ============================================
   찜하기
   ============================================ */
function toggleWish(e, id) {
  if (e) e.stopPropagation();
  const idx = state.wishlist.indexOf(id);
  if (idx >= 0) {
    state.wishlist.splice(idx, 1);
    showToast('<i class="far fa-heart"></i> 찜 목록에서 제거되었습니다');
  } else {
    state.wishlist.push(id);
    showToast('<i class="fas fa-heart" style="color:#e53935"></i> 찜 목록에 추가되었습니다', 'success');
  }
  const wc = document.getElementById('wishCount');
  wc.style.display = state.wishlist.length ? '' : 'none';
  wc.textContent = state.wishlist.length;
  renderProducts();
}

/* ============================================
   상품 상세 모달
   ============================================ */
function openProductModal(id) {
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;
  state.productModalData = p;
  state.productModalQty = 1;

  document.getElementById('pmImg').textContent = p.emoji;
  document.getElementById('pmImg').style.fontSize = '100px';
  document.getElementById('pmCat').textContent = getCatLabel(p.category);
  document.getElementById('pmName').textContent = p.name;
  document.getElementById('pmRating').innerHTML = `<span class="stars">${renderStars(p.rating)}</span> <span>${p.rating} (${p.reviews.toLocaleString()}개 리뷰)</span>`;
  document.getElementById('pmPrice').textContent = formatPrice(p.price);
  document.getElementById('pmDesc').textContent = p.desc;
  document.getElementById('pmQty').textContent = 1;

  openModal('productModal');
  logSecurityEvent('PRODUCT_VIEW', { productId: id, productName: p.name });
}

function changeQty(delta) {
  state.productModalQty = Math.max(1, state.productModalQty + delta);
  document.getElementById('pmQty').textContent = state.productModalQty;
}

function addToCartFromModal() {
  if (!state.productModalData) return;
  const p = state.productModalData;
  const existing = state.cart.find(c => c.id === p.id);
  if (existing) existing.qty += state.productModalQty;
  else state.cart.push({ ...p, qty: state.productModalQty });
  updateCartUI();
  closeModal('productModal');
  showToast(`<i class="fa fa-check-circle"></i> ${state.productModalQty}개가 장바구니에 담겼습니다`, 'success');
}

function buyNow() {
  if (!state.currentUser) {
    closeModal('productModal');
    openModal('loginModal');
    return;
  }
  showToast('<i class="fa fa-bolt"></i> 바로 구매 페이지로 이동합니다', 'success');
  closeModal('productModal');
}

/* ============================================
   HERO 슬라이더
   ============================================ */
function goSlide(idx) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  slides[state.currentSlide].classList.remove('active');
  dots[state.currentSlide].classList.remove('active');
  state.currentSlide = idx;
  slides[state.currentSlide].classList.add('active');
  dots[state.currentSlide].classList.add('active');
}

function nextSlide() {
  const total = document.querySelectorAll('.hero-slide').length;
  goSlide((state.currentSlide + 1) % total);
}

function prevSlide() {
  const total = document.querySelectorAll('.hero-slide').length;
  goSlide((state.currentSlide - 1 + total) % total);
}

function startSlider() {
  state.slideTimer = setInterval(nextSlide, 4500);
}

/* ============================================
   모바일 메뉴
   ============================================ */
function toggleMobileMenu() {
  document.getElementById('mainNav').classList.toggle('open');
}

/* ============================================
   헤더 스크롤 효과
   ============================================ */
window.addEventListener('scroll', () => {
  const header = document.getElementById('mainHeader');
  if (window.scrollY > 60) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
  hideSuggest();
});

/* ============================================
   보안 관제 이벤트 로깅 (실습용)
   ============================================ */
const securityLog = [];

function logSecurityEvent(type, data) {
  const entry = {
    type,
    data,
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
  };
  securityLog.push(entry);
  console.log('[SECURITY LOG]', entry);
}

function getSessionId() {
  if (!window._sessionId) {
    window._sessionId = 'sess_' + Math.random().toString(36).substr(2, 12);
  }
  return window._sessionId;
}

// 전역 오류 이벤트 로깅 (보안 관제 실습)
window.addEventListener('error', e => {
  logSecurityEvent('JS_ERROR', { message: e.message, filename: e.filename, lineno: e.lineno });
});

// 우클릭 방지 시도 감지 (실습용 — 실제 차단 아님)
document.addEventListener('contextmenu', () => {
  logSecurityEvent('CONTEXT_MENU_OPEN', { timestamp: new Date().toISOString() });
});

// 비정상 입력 감지 예시 (XSS 패턴 감지 실습용)
function detectXSSPattern(input) {
  const patterns = [/<script/i, /javascript:/i, /onerror=/i, /onload=/i, /alert\(/i];
  return patterns.some(p => p.test(input));
}

document.addEventListener('input', e => {
  if (e.target.tagName === 'INPUT' && detectXSSPattern(e.target.value)) {
    logSecurityEvent('SUSPICIOUS_INPUT', { value: e.target.value, fieldId: e.target.id, timestamp: new Date().toISOString() });
    showToast('<i class="fa fa-shield-alt"></i> 보안 위협이 감지되어 기록되었습니다', 'error');
  }
});

/* ============================================
   초기화
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  startSlider();
  updateCartUI();

  // 외부 클릭 시 검색 제안 숨김
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) hideSuggest();
  });

  // 모달 오버레이 클릭 시 닫기
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        overlay.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  });

  // 페이지 방문 로그
  logSecurityEvent('PAGE_VISIT', {
    url: window.location.href,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
  });

  // 헤더 스타일
  const style = document.createElement('style');
  style.textContent = `
    #mainHeader.scrolled .header-main { padding: 10px 0; }
    #mainHeader.scrolled .logo { font-size: 22px; }
    #mainHeader { transition: all 0.3s ease; }
  `;
  document.head.appendChild(style);
});
