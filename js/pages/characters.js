// ============================================
// CHARACTER PAGE RENDERER
// Reads from CHARACTERS array in js/data/characters.js
// ============================================
(function() {

  var grid = document.getElementById('characterGrid');
  var modal = document.getElementById('characterModal');
  var modalContent = document.getElementById('modalContent');
  var modalClose = document.getElementById('modalClose');
  var filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
  var roleFilterBtns = document.querySelectorAll('.filter-btn[data-role]');

  var activeFaction = 'all';
  var activeRole = 'all';

  // ---- BUILD CARD GALLERY ----
  function renderCards() {
    var maxChapter = getMaxChapter();
    var html = '';

    for (var i = 0; i < CHARACTERS.length; i++) {
      var c = CHARACTERS[i];
      if (c.chapter > maxChapter) continue;

      var factionMatch = (activeFaction === 'all' || c.faction === activeFaction);
      var roleMatch = (activeRole === 'all' || c.role === activeRole);
      if (!factionMatch || !roleMatch) continue;

      var factionInfo = FACTION_COLORS[c.faction] || { color: '#5a5650', label: 'Unknown' };
      var displayName = c.alias ? c.name + ' / "' + c.alias + '"' : c.name;

      html += '<div class="char-card" data-id="' + c.id + '" style="border-top: 2px solid ' + factionInfo.color + '">';
      html += '  <div class="char-card-portrait">';
      html += '    <img src="' + c.portrait + '" alt="' + c.name + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">';
      html += '    <div class="char-card-placeholder" style="display:none">' + c.name.charAt(0) + '</div>';
      html += '  </div>';
      html += '  <div class="char-card-info">';
      html += '    <div class="char-card-faction" style="color:' + factionInfo.color + '">' + factionInfo.label + '</div>';
      html += '    <h3 class="char-card-name">' + displayName + '</h3>';
      html += '    <div class="char-card-title">' + c.title + '</div>';
      if (c.class) {
        html += '    <div class="char-card-class">' + c.class + '</div>';
      }
      html += '  </div>';
      html += '</div>';
    }

    if (!html) {
      html = '<div class="no-results">No characters match current filters.</div>';
    }

    grid.innerHTML = html;

    // Attach click handlers
    var cards = grid.querySelectorAll('.char-card');
    for (var j = 0; j < cards.length; j++) {
      cards[j].addEventListener('click', handleCardClick);
    }
  }

  // ---- MODAL / DOSSIER VIEW ----
  function handleCardClick() {
    var id = this.getAttribute('data-id');
    var c = null;
    for (var i = 0; i < CHARACTERS.length; i++) {
      if (CHARACTERS[i].id === id) { c = CHARACTERS[i]; break; }
    }
    if (!c) return;

    var maxChapter = getMaxChapter();
    var factionInfo = FACTION_COLORS[c.faction] || { color: '#5a5650', label: 'Unknown' };
    var displayName = c.alias ? c.name + ' <span class="dossier-alias">"' + c.alias + '"</span>' : c.name;

    var html = '';
    html += '<div class="dossier">';

    // Header
    html += '<div class="dossier-header">';
    html += '  <div class="dossier-portrait">';
    html += '    <img src="' + c.portrait + '" alt="' + c.name + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">';
    html += '    <div class="dossier-placeholder" style="display:none">' + c.name.charAt(0) + '</div>';
    html += '  </div>';
    html += '  <div class="dossier-header-info">';
    html += '    <div class="dossier-faction" style="color:' + factionInfo.color + '">' + factionInfo.label + '</div>';
    html += '    <h2 class="dossier-name">' + displayName + '</h2>';
    html += '    <div class="dossier-title">' + c.title + '</div>';
    if (c.descriptor) {
      html += '    <div class="dossier-descriptor">"' + c.descriptor + '"</div>';
    }
    html += '  </div>';
    html += '</div>';

    // Class info
    if (c.class) {
      html += '<div class="dossier-section">';
      html += '  <div class="dossier-section-header">Classification</div>';
      html += '  <div class="dossier-class-grid">';
      html += '    <div class="dossier-field"><span class="field-label">Class</span><span class="field-value system-text">' + c.class + '</span></div>';
      if (c.tier) html += '    <div class="dossier-field"><span class="field-label">Tier</span><span class="field-value">' + c.tier + '</span></div>';
      if (c.primaryStat) html += '    <div class="dossier-field"><span class="field-label">Primary</span><span class="field-value system-text">' + c.primaryStat + '</span></div>';
      if (c.secondaryStat) html += '    <div class="dossier-field"><span class="field-label">Secondary</span><span class="field-value system-text">' + c.secondaryStat + '</span></div>';
      html += '  </div>';
      if (c.classLine) {
        html += '  <div class="dossier-classline">' + c.classLine + '</div>';
      }
      html += '</div>';
    }

    // Stats
    if (c.stats) {
      html += '<div class="dossier-section">';
      html += '  <div class="dossier-section-header">Stats</div>';
      var statNames = ['presence','acuity','force','resilience','velocity','precision','edge'];
      for (var s = 0; s < statNames.length; s++) {
        var sn = statNames[s];
        var val = c.stats[sn] || 0;
        if (val === 0 && sn === 'edge') continue; // hide EDGE if 0
        var isPrimary = (c.primaryStat && c.primaryStat.toUpperCase() === sn.toUpperCase());
        html += '  <div class="stat-row">';
        html += '    <span class="stat-label">' + sn + '</span>';
        html += '    <div class="stat-bar-track"><div class="stat-bar-fill' + (isPrimary ? ' primary' : '') + '" style="width:' + val + '%"></div></div>';
        html += '  </div>';
      }
      html += '</div>';
    }

    // Appearance
    if (c.appearance) {
      html += '<div class="dossier-section">';
      html += '  <div class="dossier-section-header">Appearance</div>';
      html += '  <p class="dossier-text">' + c.appearance + '</p>';
      html += '</div>';
    }

    // Summary
    html += '<div class="dossier-section">';
    html += '  <div class="dossier-section-header">Profile</div>';
    html += '  <p class="dossier-text">' + c.summary + '</p>';
    if (c.coreFlaw) {
      html += '  <div class="dossier-flaw"><span class="flaw-label">Core Flaw:</span> ' + c.coreFlaw + '</div>';
    }
    html += '</div>';

    // Skills
    var visibleSkills = [];
    for (var sk = 0; sk < c.skills.length; sk++) {
      if (c.skills[sk].chapter <= maxChapter) visibleSkills.push(c.skills[sk]);
    }
    if (visibleSkills.length > 0) {
      html += '<div class="dossier-section">';
      html += '  <div class="dossier-section-header">Skills</div>';
      for (var v = 0; v < visibleSkills.length; v++) {
        var skill = visibleSkills[v];
        html += '  <div class="skill-block">';
        html += '    <div class="skill-name">' + skill.name + '</div>';
        html += '    <div class="skill-type">' + skill.type + '</div>';
        html += '    <div class="skill-desc">' + skill.desc + '</div>';
        if (skill.ranks) {
          html += '    <div class="skill-ranks">' + skill.ranks + '</div>';
        }
        html += '  </div>';
      }
      html += '</div>';
    }

    // Relationships
    var visibleRels = [];
    for (var r = 0; r < c.relationships.length; r++) {
      if (c.relationships[r].chapter <= maxChapter) visibleRels.push(c.relationships[r]);
    }
    if (visibleRels.length > 0) {
      html += '<div class="dossier-section">';
      html += '  <div class="dossier-section-header">Known Relationships</div>';
      for (var rel = 0; rel < visibleRels.length; rel++) {
        html += '  <div class="dossier-relationship">';
        html += '    <span class="rel-name">' + visibleRels[rel].name + '</span>';
        html += '    <span class="rel-detail">' + visibleRels[rel].detail + '</span>';
        html += '  </div>';
      }
      html += '</div>';
    }

    html += '</div>'; // close .dossier

    modalContent.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // ---- CLOSE MODAL ----
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  // ---- FILTERS ----
  for (var f = 0; f < filterBtns.length; f++) {
    filterBtns[f].addEventListener('click', function() {
      activeFaction = this.getAttribute('data-filter');
      for (var x = 0; x < filterBtns.length; x++) filterBtns[x].classList.remove('active');
      this.classList.add('active');
      renderCards();
    });
  }

  for (var r = 0; r < roleFilterBtns.length; r++) {
    roleFilterBtns[r].addEventListener('click', function() {
      activeRole = this.getAttribute('data-role');
      for (var x = 0; x < roleFilterBtns.length; x++) roleFilterBtns[x].classList.remove('active');
      this.classList.add('active');
      renderCards();
    });
  }

  // ---- SPOILER INTEGRATION ----
  function getMaxChapter() {
    var sel = document.getElementById('chapterFilter');
    return sel ? parseInt(sel.value, 10) : 99;
  }

  // Re-render when spoiler filter changes
  var chapterSel = document.getElementById('chapterFilter');
  if (chapterSel) {
    chapterSel.addEventListener('change', renderCards);
  }

  // ---- INIT ----
  renderCards();

})();
