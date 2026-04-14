const videoInput = document.querySelector("#videoInput");
const audioInput = document.querySelector("#audioInput");
const fitViewButton = document.querySelector("#fitViewButton");
const deleteClipButton = document.querySelector("#deleteClipButton");
const resetButton = document.querySelector("#resetButton");
const addVideoTrackButton = document.querySelector("#addVideoTrackButton");
const addAudioTrackButton = document.querySelector("#addAudioTrackButton");
const uploadSummary = document.querySelector("#uploadSummary");
const themeSpectrum = document.querySelector("#themeSpectrum");
const themeKnob = document.querySelector("#themeKnob");
const themeStops = [...document.querySelectorAll(".theme-stop")];
const offsetSlider = document.querySelector("#offsetSlider");
const zoomSlider = document.querySelector("#zoomSlider");
const timelineStage = document.querySelector("#timelineStage");
const tracksStack = document.querySelector("#tracksStack");
const rulerCanvas = document.querySelector("#rulerCanvas");
const playheadEl = document.querySelector("#playhead");
const previewVideo = document.querySelector("#previewVideo");
const previewEmpty = document.querySelector("#previewEmpty");
const previewTimeLabel = document.querySelector("#previewTimeLabel");
const previewSourceLabel = document.querySelector("#previewSourceLabel");
const audioPoolRoot = document.querySelector("#audioPool");
const backwardButton = document.querySelector("#backwardButton");
const playButton = document.querySelector("#playButton");
const forwardButton = document.querySelector("#forwardButton");
const replayButton = document.querySelector("#replayButton");
const exportButton = document.querySelector("#exportButton");
const exportStatus = document.querySelector("#exportStatus");
const muteButton = document.querySelector("#muteButton");
const volumeSlider = document.querySelector("#volumeSlider");
const volumeLabel = document.querySelector("#volumeLabel");
const speedButtons = [...document.querySelectorAll(".speed-button")];
const videoCount = document.querySelector("#videoCount");
const audioCount = document.querySelector("#audioCount");
const totalDurationMetric = document.querySelector("#totalDurationMetric");
const viewWindowLabel = document.querySelector("#viewWindowLabel");
const selectedBadge = document.querySelector("#selectedBadge");
const playheadReadout = document.querySelector("#playheadReadout");
const currentTimeLabel = document.querySelector("#currentTimeLabel");
const totalTimeLabel = document.querySelector("#totalTimeLabel");
const selectedName = document.querySelector("#selectedName");
const selectedLane = document.querySelector("#selectedLane");
const selectedRange = document.querySelector("#selectedRange");
const selectedDuration = document.querySelector("#selectedDuration");
const themeLabel = document.querySelector("#themeLabel");
const speedLabel = document.querySelector("#speedLabel");

const minimumClipLength = 0.35;
const stagePadding = 18;
const seededPeakCount = 1400;
const themeFadeMs = 1000;
const deviceRatio = () => window.devicePixelRatio || 1;

const THEMES = [
  {
    id: "midnight",
    name: "Midnight",
    progress: 0,
    backdrop:
      "radial-gradient(circle at 14% 12%, rgba(63, 102, 176, 0.36), transparent 28%), radial-gradient(circle at 84% 10%, rgba(34, 157, 153, 0.24), transparent 24%), linear-gradient(180deg, #11151f 0%, #0d1118 50%, #090b11 100%)",
    panelBg: "rgba(17, 22, 30, 0.78)",
    cardBg: "rgba(14, 18, 25, 0.8)",
    laneBg: "rgba(8, 11, 17, 0.92)",
    accent: "#67ccff",
    accentSoft: "rgba(103, 204, 255, 0.22)",
    accentStrong: "#b4efff",
    videoFill:
      "linear-gradient(145deg, rgba(145, 115, 255, 0.98), rgba(71, 92, 204, 0.98))",
    audioFill:
      "linear-gradient(145deg, rgba(63, 182, 255, 0.98), rgba(22, 104, 188, 0.98))",
  },
  {
    id: "ember",
    name: "Ember",
    progress: 0.25,
    backdrop:
      "radial-gradient(circle at 18% 12%, rgba(255, 170, 115, 0.34), transparent 28%), radial-gradient(circle at 84% 12%, rgba(214, 82, 108, 0.24), transparent 24%), linear-gradient(180deg, #25161a 0%, #1e1419 46%, #100c11 100%)",
    panelBg: "rgba(36, 22, 27, 0.8)",
    cardBg: "rgba(28, 18, 23, 0.82)",
    laneBg: "rgba(24, 15, 20, 0.93)",
    accent: "#ffb672",
    accentSoft: "rgba(255, 182, 114, 0.22)",
    accentStrong: "#ffe0ba",
    videoFill:
      "linear-gradient(145deg, rgba(255, 162, 123, 0.98), rgba(204, 82, 106, 0.98))",
    audioFill:
      "linear-gradient(145deg, rgba(255, 209, 121, 0.98), rgba(194, 112, 42, 0.98))",
  },
  {
    id: "aurora",
    name: "Aurora",
    progress: 0.5,
    backdrop:
      "radial-gradient(circle at 14% 14%, rgba(132, 226, 195, 0.3), transparent 28%), radial-gradient(circle at 86% 10%, rgba(123, 152, 255, 0.28), transparent 24%), linear-gradient(180deg, #111c1b 0%, #0f161d 48%, #0a1016 100%)",
    panelBg: "rgba(17, 29, 30, 0.8)",
    cardBg: "rgba(14, 22, 25, 0.82)",
    laneBg: "rgba(9, 16, 18, 0.93)",
    accent: "#7ce1c0",
    accentSoft: "rgba(124, 225, 192, 0.22)",
    accentStrong: "#d7fff2",
    videoFill:
      "linear-gradient(145deg, rgba(130, 232, 201, 0.98), rgba(76, 112, 233, 0.98))",
    audioFill:
      "linear-gradient(145deg, rgba(121, 204, 255, 0.98), rgba(45, 155, 178, 0.98))",
  },
  {
    id: "ocean",
    name: "Ocean",
    progress: 0.75,
    backdrop:
      "radial-gradient(circle at 16% 12%, rgba(92, 153, 255, 0.32), transparent 28%), radial-gradient(circle at 84% 14%, rgba(47, 229, 223, 0.22), transparent 24%), linear-gradient(180deg, #0e1726 0%, #0d1420 48%, #09101a 100%)",
    panelBg: "rgba(14, 24, 39, 0.8)",
    cardBg: "rgba(12, 20, 33, 0.82)",
    laneBg: "rgba(8, 14, 26, 0.94)",
    accent: "#69b6ff",
    accentSoft: "rgba(105, 182, 255, 0.22)",
    accentStrong: "#cfe8ff",
    videoFill:
      "linear-gradient(145deg, rgba(97, 174, 255, 0.98), rgba(75, 94, 228, 0.98))",
    audioFill:
      "linear-gradient(145deg, rgba(84, 228, 232, 0.98), rgba(33, 138, 210, 0.98))",
  },
  {
    id: "moss",
    name: "Moss",
    progress: 1,
    backdrop:
      "radial-gradient(circle at 14% 12%, rgba(141, 205, 117, 0.28), transparent 28%), radial-gradient(circle at 86% 12%, rgba(241, 203, 98, 0.18), transparent 24%), linear-gradient(180deg, #171d14 0%, #131812 48%, #0d110d 100%)",
    panelBg: "rgba(22, 27, 18, 0.8)",
    cardBg: "rgba(18, 23, 15, 0.82)",
    laneBg: "rgba(12, 16, 9, 0.94)",
    accent: "#a6d66b",
    accentSoft: "rgba(166, 214, 107, 0.22)",
    accentStrong: "#ecffd0",
    videoFill:
      "linear-gradient(145deg, rgba(182, 211, 94, 0.98), rgba(77, 145, 102, 0.98))",
    audioFill:
      "linear-gradient(145deg, rgba(235, 205, 104, 0.98), rgba(112, 171, 89, 0.98))",
  },
];

let audioContext = null;

const state = {
  themeId: THEMES[0].id,
  nextTrackId: 1,
  nextClipId: 1,
  nextAssetId: 1,
  selectedClipId: null,
  selectedClipIds: [],
  selectedTrackIds: [],
  playheadTime: 0,
  playheadGuideVisible: false,
  drag: null,
  themeFadeTimer: 0,
  view: { offset: 0, windowDuration: 12, zoomPercent: 0 },
  preview: {
    playing: false,
    speed: 1,
    volume: 82,
    muted: false,
    rafId: 0,
    anchorPerf: 0,
    anchorTime: 0,
  },
  export: {
    active: false,
    status: "导出为 WebM",
    canvas: null,
    ctx: null,
    stream: null,
    recorder: null,
    audioDestination: null,
    chunks: [],
    previous: null,
    stopping: false,
  },
  audioRouting: {
    initialized: false,
    context: null,
    outputGain: null,
    previewVideoSource: null,
    previewVideoGain: null,
  },
  audioPool: [],
  assets: new Map(),
  tracks: [],
};

function createTrack(kind) {
  return {
    id: state.nextTrackId++,
    kind,
    clips: [],
  };
}

state.tracks = [createTrack("video"), createTrack("audio")];

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  return audioContext;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function pad(number) {
  return String(number).padStart(2, "0");
}

function formatClock(seconds, includeFraction = false) {
  const safeSeconds = Math.max(0, seconds);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const secs = Math.floor(safeSeconds % 60);
  const hundredths = Math.floor((safeSeconds % 1) * 100);
  const base = hours > 0 ? `${pad(hours)}:${pad(minutes)}:${pad(secs)}` : `${pad(minutes)}:${pad(secs)}`;
  return includeFraction ? `${base}.${pad(hundredths)}` : base;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function seedFromString(input) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function hashNormalized(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function buildSeededPeaks(seed, peakCount) {
  const peaks = new Float32Array(peakCount);
  for (let index = 0; index < peakCount; index += 1) {
    const noiseA = hashNormalized(seed + index * 7.13);
    const noiseB = hashNormalized(seed + index * 17.31);
    const envelope = 0.24 + 0.42 * Math.sin(index * 0.016 + seed * 0.0003) ** 2;
    peaks[index] = clamp((noiseA * 0.55 + noiseB * 0.45) * envelope + 0.08, 0.04, 1);
  }
  return peaks;
}

function buildPeaksFromSamples(channelData, peakCount) {
  const peaks = new Float32Array(peakCount);
  const samplesPerPeak = Math.max(1, Math.floor(channelData.length / peakCount));

  for (let peakIndex = 0; peakIndex < peakCount; peakIndex += 1) {
    const start = peakIndex * samplesPerPeak;
    const end = Math.min(channelData.length, start + samplesPerPeak);
    let max = 0;

    for (let sampleIndex = start; sampleIndex < end; sampleIndex += 1) {
      const amplitude = Math.abs(channelData[sampleIndex]);
      if (amplitude > max) {
        max = amplitude;
      }
    }

    peaks[peakIndex] = max;
  }

  return peaks;
}

function getThemeById(themeId) {
  return THEMES.find((theme) => theme.id === themeId) ?? THEMES[0];
}

function setThemeVariables(theme) {
  document.body.style.setProperty("--panel-bg", theme.panelBg);
  document.body.style.setProperty("--card-bg", theme.cardBg);
  document.body.style.setProperty("--lane-bg", theme.laneBg);
  document.body.style.setProperty("--accent", theme.accent);
  document.body.style.setProperty("--accent-soft", theme.accentSoft);
  document.body.style.setProperty("--accent-strong", theme.accentStrong);
  document.body.style.setProperty("--video-fill", theme.videoFill);
  document.body.style.setProperty("--audio-fill", theme.audioFill);
}

function positionThemeKnob(progress = getThemeById(state.themeId).progress) {
  const width = themeSpectrum.clientWidth || 84;
  const knobTravel = Math.max(0, width - 32);
  themeKnob.style.transform = `translateX(${Math.round(knobTravel * progress)}px)`;
}

function applyTheme(themeId, { initial = false } = {}) {
  const theme = getThemeById(themeId);
  state.themeId = theme.id;
  setThemeVariables(theme);
  positionThemeKnob(theme.progress);

  if (initial) {
    document.body.style.setProperty("--theme-active-bg", theme.backdrop);
    document.body.style.setProperty("--theme-incoming-bg", theme.backdrop);
    document.body.classList.remove("theme-fading");
    return;
  }

  clearTimeout(state.themeFadeTimer);
  document.body.classList.remove("theme-fading");
  document.body.style.setProperty("--theme-incoming-bg", theme.backdrop);
  void document.body.offsetWidth;
  document.body.classList.add("theme-fading");

  state.themeFadeTimer = window.setTimeout(() => {
    document.body.style.setProperty("--theme-active-bg", theme.backdrop);
    document.body.classList.remove("theme-fading");
  }, themeFadeMs);

  updateReadouts();
}

function getTrackById(trackId) {
  return state.tracks.find((track) => track.id === trackId) ?? null;
}

function getTracksByKind(kind) {
  return state.tracks.filter((track) => track.kind === kind);
}

function getTrackLabel(track) {
  const tracksOfKind = getTracksByKind(track.kind);
  const index = tracksOfKind.findIndex((item) => item.id === track.id);
  return `${track.kind === "video" ? "V" : "A"}${index + 1}`;
}

function getTrackTitle(track) {
  return track.kind === "video" ? "视频轨道" : "音频轨道";
}

function getSortedTrackClips(trackId) {
  const track = getTrackById(trackId);
  if (!track) {
    return [];
  }

  return [...track.clips].sort((left, right) => left.timelineStart - right.timelineStart);
}

function getAllClips() {
  return state.tracks.flatMap((track) => track.clips);
}

function getClipById(clipId) {
  return getAllClips().find((clip) => clip.id === clipId) ?? null;
}

function getAssetById(assetId) {
  return state.assets.get(assetId) ?? null;
}

function getClipName(clip) {
  return getAssetById(clip.assetId)?.name ?? "未命名素材";
}

function visibleDuration(clip) {
  return Math.max(0, clip.trimEnd - clip.trimStart);
}

function clipEnd(clip) {
  return clip.timelineStart + visibleDuration(clip);
}

function timelineContentDuration() {
  return getAllClips().reduce((maxDuration, clip) => Math.max(maxDuration, clipEnd(clip)), 0);
}

function minViewDuration() {
  return 1.5;
}

function maxViewDuration() {
  const contentDuration = timelineContentDuration();
  return Math.max(12, contentDuration || 12);
}

function maxOffset() {
  return Math.max(0, timelineContentDuration() - state.view.windowDuration);
}

function zoomPercentToWindowDuration(percent) {
  const min = minViewDuration();
  const max = maxViewDuration();
  if (max <= min) {
    return max;
  }

  const ratio = max / min;
  return max / Math.pow(ratio, clamp(percent, 0, 100) / 100);
}

function windowDurationToZoomPercent(windowDuration) {
  const min = minViewDuration();
  const max = maxViewDuration();
  if (max <= min) {
    return 0;
  }

  const ratio = max / min;
  return clamp((Math.log(max / windowDuration) / Math.log(ratio)) * 100, 0, 100);
}

function clampViewState() {
  state.view.windowDuration = clamp(state.view.windowDuration, minViewDuration(), maxViewDuration());
  state.view.offset = clamp(state.view.offset, 0, maxOffset());
  state.view.zoomPercent = windowDurationToZoomPercent(state.view.windowDuration);
}

function fitTimelineView() {
  state.view.windowDuration = maxViewDuration();
  state.view.offset = 0;
  clampViewState();
  renderAll();
}

function applyZoomPercent(nextPercent, anchorTime = state.playheadTime) {
  const currentWindow = state.view.windowDuration;
  const anchorRatio = currentWindow > 0 ? (anchorTime - state.view.offset) / currentWindow : 0.5;
  state.view.zoomPercent = clamp(nextPercent, 0, 100);
  state.view.windowDuration = zoomPercentToWindowDuration(state.view.zoomPercent);
  state.view.offset = clamp(
    anchorTime - anchorRatio * state.view.windowDuration,
    0,
    Math.max(0, timelineContentDuration() - state.view.windowDuration),
  );
  clampViewState();
  renderAll();
}

function setViewOffset(nextOffset) {
  state.view.offset = clamp(nextOffset, 0, maxOffset());
  renderAll();
}

function getStageMetrics() {
  const rect = timelineStage.getBoundingClientRect();
  const width = rect.width || 900;
  const contentWidth = Math.max(280, width - stagePadding * 2);
  return {
    width,
    contentLeft: stagePadding,
    contentWidth,
  };
}

function pixelsPerSecond() {
  const metrics = getStageMetrics();
  return metrics.contentWidth / state.view.windowDuration;
}

function timeToX(timeInSeconds) {
  const metrics = getStageMetrics();
  return metrics.contentLeft + (timeInSeconds - state.view.offset) * pixelsPerSecond();
}

function clientXToTime(clientX) {
  const rect = timelineStage.getBoundingClientRect();
  const localX = clientX - rect.left - stagePadding;
  return clamp(state.view.offset + localX / pixelsPerSecond(), 0, timelineContentDuration());
}

function ensurePlayheadVisible() {
  const edgeWindow = state.view.windowDuration * 0.14;
  const leftEdge = state.view.offset + edgeWindow;
  const rightEdge = state.view.offset + state.view.windowDuration - edgeWindow;

  if (state.playheadTime < leftEdge) {
    state.view.offset = clamp(state.playheadTime - edgeWindow, 0, maxOffset());
  }

  if (state.playheadTime > rightEdge) {
    state.view.offset = clamp(
      state.playheadTime - state.view.windowDuration + edgeWindow,
      0,
      maxOffset(),
    );
  }
}

function findActiveClipInTrack(track, timeInSeconds) {
  return getSortedTrackClips(track.id).find(
    (clip) => timeInSeconds >= clip.timelineStart && timeInSeconds < clipEnd(clip),
  ) ?? null;
}

function getActiveVideoClip(timeInSeconds) {
  for (const track of getTracksByKind("video")) {
    const clip = findActiveClipInTrack(track, timeInSeconds);
    if (clip) {
      return clip;
    }
  }

  return null;
}

function getActiveAudioClips(timeInSeconds) {
  return getTracksByKind("audio").flatMap((track) =>
    getSortedTrackClips(track.id).filter(
      (clip) => timeInSeconds >= clip.timelineStart && timeInSeconds < clipEnd(clip),
    ),
  );
}

function getTrackForNewClip(kind) {
  const selectedClip = getClipById(state.selectedClipId);
  if (selectedClip && selectedClip.type === kind) {
    return getTrackById(selectedClip.trackId);
  }

  const tracks = getTracksByKind(kind);
  return tracks[tracks.length - 1] ?? null;
}

function isToggleSelectionEvent(event) {
  return Boolean(event.ctrlKey || event.metaKey);
}

function isClipSelected(clipId) {
  return state.selectedClipIds.includes(clipId);
}

function isTrackSelected(trackId) {
  return state.selectedTrackIds.includes(trackId);
}

function clearClipSelection() {
  state.selectedClipId = null;
  state.selectedClipIds = [];
}

function clearTrackSelection() {
  state.selectedTrackIds = [];
}

function clearSelections() {
  clearClipSelection();
  clearTrackSelection();
}

function normalizeClipSelectionState() {
  state.selectedClipIds = state.selectedClipIds.filter((clipId) => Boolean(getClipById(clipId)));

  if (!state.selectedClipIds.length) {
    state.selectedClipId = null;
    return;
  }

  if (!state.selectedClipIds.includes(state.selectedClipId)) {
    state.selectedClipId = state.selectedClipIds[state.selectedClipIds.length - 1];
  }
}

function updateSpeedButtons() {
  speedButtons.forEach((button) => {
    const speed = Number(button.dataset.speed);
    button.classList.toggle("is-active", Math.abs(speed - state.preview.speed) < 0.001);
  });
}

function updateReadouts() {
  normalizeClipSelectionState();
  const selectedClip = getClipById(state.selectedClipId);
  const singleSelectedTrack =
    !selectedClip && state.selectedTrackIds.length === 1 ? getTrackById(state.selectedTrackIds[0]) : null;
  const selectedTrack = selectedClip ? getTrackById(selectedClip.trackId) : singleSelectedTrack;
  const hasClips = getAllClips().length > 0;
  const hasSelection = state.selectedClipIds.length > 0 || state.selectedTrackIds.length > 0;
  const totalDuration = timelineContentDuration();
  const offsetRatio = maxOffset() > 0 ? state.view.offset / maxOffset() : 0;
  const videoAssets = [...state.assets.values()].filter((asset) => asset.type === "video").length;
  const audioAssets = [...state.assets.values()].filter((asset) => asset.type === "audio").length;

  videoCount.textContent = String(getAllClips().filter((clip) => clip.type === "video").length);
  audioCount.textContent = String(getAllClips().filter((clip) => clip.type === "audio").length);
  totalDurationMetric.textContent = formatClock(totalDuration, false);
  viewWindowLabel.textContent = formatClock(state.view.windowDuration, false);
  if (state.selectedTrackIds.length > 1) {
    selectedBadge.textContent = `已选中 ${state.selectedTrackIds.length} 条轨道`;
  } else if (state.selectedTrackIds.length === 1 && selectedTrack) {
    selectedBadge.textContent = `${getTrackLabel(selectedTrack)} / 轨道已选中`;
  } else if (state.selectedClipIds.length > 1) {
    selectedBadge.textContent = `已选中 ${state.selectedClipIds.length} 个片段`;
  } else if (selectedClip && selectedTrack) {
    selectedBadge.textContent = `${getTrackLabel(selectedTrack)} / ${getClipName(selectedClip)}`;
  } else {
    selectedBadge.textContent = "未选中片段";
  }
  playheadReadout.textContent = formatClock(state.playheadTime, true);
  currentTimeLabel.textContent = formatClock(state.playheadTime, true);
  totalTimeLabel.textContent = formatClock(totalDuration, false);

  offsetSlider.value = String(Math.round(offsetRatio * 1000));
  offsetSlider.disabled = maxOffset() <= 0;
  zoomSlider.value = String(Math.round(state.view.zoomPercent));

  playButton.disabled = !hasClips || state.export.active;
  playButton.textContent = state.preview.playing ? "暂停" : "播放";
  backwardButton.disabled = !hasClips || state.export.active;
  forwardButton.disabled = !hasClips || state.export.active;
  replayButton.disabled = !hasClips || state.export.active;
  exportButton.disabled = !hasClips || state.export.active;
  exportButton.textContent = state.export.active ? "导出中" : "导出视频";
  exportStatus.textContent = state.export.status;
  deleteClipButton.disabled = !hasSelection || state.export.active;
  fitViewButton.disabled = state.export.active;
  resetButton.disabled = state.export.active;
  addVideoTrackButton.disabled = state.export.active;
  addAudioTrackButton.disabled = state.export.active;
  videoInput.disabled = state.export.active;
  audioInput.disabled = state.export.active;
  themeStops.forEach((button) => {
    button.disabled = state.export.active;
  });

  if (selectedClip && selectedTrack) {
    selectedName.textContent = getClipName(selectedClip);
    selectedLane.textContent = `${getTrackLabel(selectedTrack)} ${getTrackTitle(selectedTrack)}`;
    selectedRange.textContent = `${formatClock(selectedClip.trimStart, true)} - ${formatClock(selectedClip.trimEnd, true)}`;
    selectedDuration.textContent = formatClock(visibleDuration(selectedClip), true);
  } else if (state.selectedClipIds.length > 1) {
    const selectedClips = state.selectedClipIds
      .map((clipId) => getClipById(clipId))
      .filter(Boolean);
    const totalSelectedClipDuration = selectedClips.reduce(
      (sum, clip) => sum + visibleDuration(clip),
      0,
    );
    selectedName.textContent = `已选中 ${selectedClips.length} 个片段`;
    selectedLane.textContent = "片段多选";
    selectedRange.textContent = "可统一删除";
    selectedDuration.textContent = formatClock(totalSelectedClipDuration, true);
  } else if (state.selectedTrackIds.length === 1 && selectedTrack) {
    const trackClips = getSortedTrackClips(selectedTrack.id);
    const trackStart = trackClips.length ? trackClips[0].timelineStart : 0;
    const trackEnd = trackClips.reduce((maxDuration, clip) => Math.max(maxDuration, clipEnd(clip)), 0);
    selectedName.textContent = `${getTrackLabel(selectedTrack)} ${getTrackTitle(selectedTrack)}`;
    selectedLane.textContent = `${selectedTrack.clips.length} 段素材`;
    selectedRange.textContent = trackClips.length
      ? `${formatClock(trackStart, false)} - ${formatClock(trackEnd, false)}`
      : "空轨道";
    selectedDuration.textContent = trackClips.length
      ? formatClock(Math.max(0, trackEnd - trackStart), false)
      : "00:00";
  } else if (state.selectedTrackIds.length > 1) {
    const selectedTracks = state.selectedTrackIds
      .map((trackId) => getTrackById(trackId))
      .filter(Boolean);
    const totalSelectedTrackClips = selectedTracks.reduce((sum, track) => sum + track.clips.length, 0);
    const selectedVideoTracks = selectedTracks.filter((track) => track.kind === "video").length;
    const selectedAudioTracks = selectedTracks.length - selectedVideoTracks;
    selectedName.textContent = `已选中 ${selectedTracks.length} 条轨道`;
    selectedLane.textContent = `${selectedVideoTracks} 视频轨 / ${selectedAudioTracks} 音频轨`;
    selectedRange.textContent = "可多选删除";
    selectedDuration.textContent = `${totalSelectedTrackClips} 段素材`;
  } else {
    selectedName.textContent = "未选中";
    selectedLane.textContent = "-";
    selectedRange.textContent = "-";
    selectedDuration.textContent = "-";
  }
  themeLabel.textContent = getThemeById(state.themeId).name;
  speedLabel.textContent = `${state.preview.speed.toFixed(1)}x`;
  uploadSummary.textContent =
    videoAssets || audioAssets ? `${videoAssets}个视频 / ${audioAssets}个音频` : "未选择文件";
  volumeLabel.textContent = `${Math.round(state.preview.volume)}%`;
  muteButton.textContent = state.preview.muted ? "取消静音" : "静音";
  updateSpeedButtons();
}

function drawRuler() {
  const metrics = getStageMetrics();
  const width = Math.round(metrics.width);
  const height = 48;
  const ratio = deviceRatio();

  rulerCanvas.width = width * ratio;
  rulerCanvas.height = height * ratio;
  rulerCanvas.style.width = `${width}px`;
  rulerCanvas.style.height = `${height}px`;

  const ctx = rulerCanvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "rgba(255,255,255,0.14)";
  ctx.fillStyle = "#94a2b7";
  ctx.lineWidth = 1;
  ctx.font = '12px "Segoe UI Variable", "Microsoft YaHei UI", sans-serif';

  const steps = [0.5, 1, 2, 5, 10, 15, 30, 60, 120, 300, 600, 900, 1800, 3600];
  const desiredStep = state.view.windowDuration / 8;
  const majorStep = steps.find((step) => step >= desiredStep) ?? 7200;
  const minorDivisor = majorStep >= 60 ? 4 : 5;
  const visibleStart = state.view.offset;
  const visibleEnd = state.view.offset + state.view.windowDuration;
  const firstTick = Math.floor(visibleStart / majorStep) * majorStep;

  for (let tickTime = firstTick; tickTime <= visibleEnd + majorStep; tickTime += majorStep) {
    const x = Math.round(timeToX(tickTime)) + 0.5;
    ctx.beginPath();
    ctx.moveTo(x, 18);
    ctx.lineTo(x, 46);
    ctx.stroke();
    ctx.fillText(formatClock(tickTime, false), x + 6, 16);

    const gap = (majorStep * pixelsPerSecond()) / minorDivisor;
    for (let minorIndex = 1; minorIndex < minorDivisor; minorIndex += 1) {
      const minorX = x + gap * minorIndex;
      ctx.beginPath();
      ctx.moveTo(minorX, 28);
      ctx.lineTo(minorX, 42);
      ctx.stroke();
    }
  }
}

function resizeCanvas(canvas) {
  const width = Math.max(1, Math.round(canvas.clientWidth));
  const height = Math.max(1, Math.round(canvas.clientHeight));
  const ratio = deviceRatio();

  canvas.width = width * ratio;
  canvas.height = height * ratio;

  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);
  return { ctx, width, height };
}

function roundRectPath(ctx, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + safeRadius, y);
  ctx.lineTo(x + width - safeRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  ctx.lineTo(x + width, y + height - safeRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  ctx.lineTo(x + safeRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  ctx.lineTo(x, y + safeRadius);
  ctx.quadraticCurveTo(x, y, x + safeRadius, y);
  ctx.closePath();
}

function drawAudioCanvas(canvas, clip) {
  const asset = getAssetById(clip.assetId);
  const peaks = asset?.peaks ?? buildSeededPeaks(asset?.seed ?? clip.id, seededPeakCount);
  const { ctx, width, height } = resizeCanvas(canvas);
  const startRatio = clip.trimStart / clip.duration;
  const endRatio = clip.trimEnd / clip.duration;
  const centerY = height / 2;
  const maxBarHeight = height * 0.88;
  const backdrop = ctx.createLinearGradient(0, 0, width, height);

  backdrop.addColorStop(0, "rgba(255,255,255,0.18)");
  backdrop.addColorStop(1, "rgba(255,255,255,0.05)");
  ctx.fillStyle = backdrop;
  roundRectPath(ctx, 0, 0, width, height, 14);
  ctx.fill();

  const gradient = ctx.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, "rgba(255,255,255,0.9)");
  gradient.addColorStop(0.5, "rgba(218,243,255,0.98)");
  gradient.addColorStop(1, "rgba(255,255,255,0.76)");
  ctx.fillStyle = gradient;

  for (let x = 0; x < width; x += 1) {
    const ratio = width <= 1 ? 0 : x / (width - 1);
    const sampleRatio = startRatio + (endRatio - startRatio) * ratio;
    const peakIndex = clamp(
      Math.floor(sampleRatio * (peaks.length - 1)),
      0,
      peaks.length - 1,
    );
    const amplitude = peaks[peakIndex] || 0.05;
    const barHeight = Math.max(2, amplitude * maxBarHeight);
    const y = centerY - barHeight / 2;
    ctx.globalAlpha = x % 4 === 0 ? 0.94 : 0.7;
    ctx.fillRect(x, y, 1, barHeight);
  }

  ctx.globalAlpha = 1;
}

function drawFallbackFrame(ctx, x, y, width, height, seed) {
  const noise = hashNormalized(seed + x * 0.07 + width * 0.12);
  const shadeA = 54 + Math.round(noise * 26);
  const shadeB = 26 + Math.round(noise * 22);
  const gradient = ctx.createLinearGradient(x, y, x, y + height);
  gradient.addColorStop(0, `rgba(${shadeA}, ${shadeA + 6}, ${shadeA + 18}, 0.95)`);
  gradient.addColorStop(1, `rgba(${shadeB}, ${shadeB + 4}, ${shadeB + 12}, 0.96)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);

  ctx.fillStyle = "rgba(255,255,255,0.08)";
  ctx.fillRect(x, y, width, 2);
  ctx.fillRect(x, y + height - 2, width, 2);

  const bandY = y + height * 0.62;
  const bandHeight = Math.max(12, height * 0.18);
  ctx.fillStyle = "rgba(0,0,0,0.18)";
  ctx.fillRect(x, bandY, width, bandHeight);
}

function drawVideoCanvas(canvas, clip) {
  const asset = getAssetById(clip.assetId);
  const { ctx, width, height } = resizeCanvas(canvas);
  const frameCount = Math.max(4, Math.floor(width / 56));
  const gap = 1;
  const cardHeight = height;
  const cardWidth = Math.max(28, (width - gap * (frameCount - 1)) / frameCount);
  const seed = asset?.seed ?? clip.id;

  ctx.fillStyle = "#171b23";
  ctx.fillRect(0, 0, width, height);

  for (let index = 0; index < frameCount; index += 1) {
    const x = index * (cardWidth + gap);
    const y = 0;
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, cardWidth, cardHeight);
    ctx.clip();

    const ratio = frameCount <= 1 ? 0 : index / (frameCount - 1);
    const sampleTime = clip.trimStart + visibleDuration(clip) * ratio;
    const sampleRatio = asset && asset.duration > 0 ? sampleTime / asset.duration : ratio;
    const thumbnailIndex =
      asset?.thumbnailImages?.length
        ? clamp(
            Math.round(sampleRatio * (asset.thumbnailImages.length - 1)),
            0,
            asset.thumbnailImages.length - 1,
          )
        : -1;
    const image = thumbnailIndex >= 0 ? asset.thumbnailImages[thumbnailIndex] : null;

    if (image && image.complete) {
      const sourceRatio = image.naturalWidth / Math.max(1, image.naturalHeight);
      const targetRatio = cardWidth / cardHeight;
      let drawWidth = cardWidth;
      let drawHeight = cardHeight;
      let drawX = x;
      let drawY = y;

      if (sourceRatio > targetRatio) {
        drawHeight = cardHeight;
        drawWidth = cardHeight * sourceRatio;
        drawX = x - (drawWidth - cardWidth) / 2;
      } else {
        drawWidth = cardWidth;
        drawHeight = cardWidth / sourceRatio;
        drawY = y - (drawHeight - cardHeight) / 2;
      }

      ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
    } else {
      drawFallbackFrame(ctx, x, y, cardWidth, cardHeight, seed + index * 11.17);
    }

    ctx.fillStyle = "rgba(0,0,0,0.16)";
    ctx.fillRect(x, 0, cardWidth, 6);
    ctx.fillRect(x, cardHeight - 18, cardWidth, 18);
    ctx.restore();

    if (index < frameCount - 1) {
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      ctx.fillRect(x + cardWidth, 0, gap, cardHeight);
    }
  }

  ctx.fillStyle = "rgba(255,255,255,0.08)";
  ctx.fillRect(0, 0, width, 1.5);
  ctx.fillStyle = "rgba(0,0,0,0.18)";
  ctx.fillRect(0, height - 1.5, width, 1.5);
}

function clipTemplate(clip) {
  const width = Math.max(48, visibleDuration(clip) * pixelsPerSecond());
  const left = timeToX(clip.timelineStart);
  const selectedClass = isClipSelected(clip.id) ? "is-selected" : "";
  const draggingClass = state.drag?.clipId === clip.id ? "is-dragging" : "";
  const clipLabel = clip.type === "video" ? "视频素材" : "波形预览";
  const hint = clip.type === "video" ? "拖动 / 裁剪" : "拖动可裁剪音频细节";

  return `
    <article
      class="timeline-clip ${clip.type}-clip ${selectedClass} ${draggingClass}"
      data-clip-id="${clip.id}"
      style="left:${left}px;width:${width}px"
    >
      <div class="clip-topline">
        <span class="clip-name">${escapeHtml(getClipName(clip))}</span>
        <span class="clip-meta">
          <button class="clip-mini-button" type="button" data-role="duplicate" aria-label="复制片段" title="复制片段">⧉</button>
          <span>${formatClock(visibleDuration(clip), true)}</span>
        </span>
      </div>
      <canvas class="clip-canvas" data-role-canvas="${clip.type}"></canvas>
      <div class="clip-footnote">
        <span>${clipLabel}</span>
        <span>${hint}</span>
      </div>
      <button class="trim-handle trim-left" type="button" data-role="trim-start" aria-label="左侧裁剪"></button>
      <button class="trim-handle trim-right" type="button" data-role="trim-end" aria-label="右侧裁剪"></button>
      <button class="zoom-grip" type="button" data-role="zoom" aria-label="拉长查看细节">拉长看细节</button>
    </article>
  `;
}

function laneEmptyTemplate(track) {
  return track.kind === "video"
    ? "上传一个或多个视频文件，默认会顺序拼接到当前视频轨。"
    : "上传一个或多个音频文件，默认会顺序拼接到当前音频轨。";
}

function trackTemplate(track) {
  const clips = getSortedTrackClips(track.id).filter(
    (clip) =>
      clipEnd(clip) >= state.view.offset &&
      clip.timelineStart <= state.view.offset + state.view.windowDuration,
  );
  const trackLabel = getTrackLabel(track);
  const selectedClass = isTrackSelected(track.id) ? "is-selected" : "";
  const selectionTag = isTrackSelected(track.id)
    ? '<span class="lane-selection-note">已选中</span>'
    : "";

  return `
    <section class="track-lane ${selectedClass}" data-track-id="${track.id}" data-kind="${track.kind}">
      <div class="lane-meta">
        <span class="lane-badge lane-badge-${track.kind}">${trackLabel}</span>
        <span class="lane-text">${getTrackTitle(track)}</span>
        <span class="lane-count">${track.clips.length}段</span>
        ${selectionTag}
      </div>
      <div class="lane-clips">
        ${
          clips.length
            ? clips.map(clipTemplate).join("")
            : `<div class="lane-empty">${laneEmptyTemplate(track)}</div>`
        }
      </div>
    </section>
  `;
}

function renderTracks() {
  tracksStack.style.setProperty("--track-count", String(Math.max(1, state.tracks.length)));
  tracksStack.innerHTML = state.tracks.map(trackTemplate).join("");

  tracksStack.querySelectorAll(".clip-canvas").forEach((canvas) => {
    const clipId = Number(canvas.closest(".timeline-clip").dataset.clipId);
    const clip = getClipById(clipId);
    if (!clip) {
      return;
    }

    if (clip.type === "audio") {
      drawAudioCanvas(canvas, clip);
      return;
    }

    drawVideoCanvas(canvas, clip);
  });
}

function positionPlayhead() {
  playheadEl.style.left = `${timeToX(state.playheadTime)}px`;
  playheadEl.classList.toggle("is-active", state.playheadGuideVisible);
}

function renderTimeline() {
  clampViewState();
  drawRuler();
  renderTracks();
  positionPlayhead();
}

function renderAll() {
  renderTimeline();
  updateReadouts();
  syncPreviewMedia();
}

function clearMediaElement(mediaElement) {
  mediaElement.pause();
  mediaElement.removeAttribute("src");
  mediaElement.removeAttribute("data-clip-id");
  mediaElement.removeAttribute("data-asset-id");
  mediaElement.load();
}

function syncMediaElement(mediaElement, clip, clipTime, shouldPlay, options = {}) {
  mediaElement.playbackRate = options.playbackRate ?? 1;
  mediaElement.volume = options.volume ?? 1;
  mediaElement.muted = options.muted ?? false;

  if (!clip) {
    if (mediaElement.dataset.assetId) {
      clearMediaElement(mediaElement);
    } else {
      mediaElement.pause();
    }
    return;
  }

  const asset = getAssetById(clip.assetId);
  if (!asset) {
    clearMediaElement(mediaElement);
    return;
  }

  const assetId = String(asset.id);
  if (mediaElement.dataset.assetId !== assetId) {
    mediaElement.dataset.assetId = assetId;
    mediaElement.src = asset.objectUrl;
    mediaElement.load();
  }

  mediaElement.dataset.clipId = String(clip.id);

  const seekToClipTime = () => {
    const safeDuration =
      Number.isFinite(mediaElement.duration) && mediaElement.duration > 0
        ? Math.max(0, mediaElement.duration - 0.05)
        : clipTime;
    const safeTarget = clamp(clipTime, 0, safeDuration);

    if (Math.abs((mediaElement.currentTime || 0) - safeTarget) > 0.3) {
      try {
        mediaElement.currentTime = safeTarget;
      } catch (error) {
        console.debug("seek skipped", error);
      }
    }
  };

  if (mediaElement.readyState >= 1) {
    seekToClipTime();
  } else {
    mediaElement.addEventListener("loadedmetadata", seekToClipTime, { once: true });
  }

  if (shouldPlay) {
    mediaElement.play().catch(() => {
      mediaElement.pause();
    });
  } else {
    mediaElement.pause();
  }
}

function connectAudioPoolItem(item) {
  if (!state.audioRouting.initialized || item.source) {
    return;
  }

  const context = state.audioRouting.context;
  item.source = context.createMediaElementSource(item.element);
  item.gain = context.createGain();
  item.source.connect(item.gain);
  item.gain.connect(state.audioRouting.outputGain);
}

function createAudioPoolItem() {
  const element = document.createElement("audio");
  element.preload = "metadata";
  audioPoolRoot.appendChild(element);
  const item = { element, source: null, gain: null };
  state.audioPool.push(item);
  connectAudioPoolItem(item);
  return item;
}

function ensureAudioPoolSize(count) {
  while (state.audioPool.length < count) {
    createAudioPoolItem();
  }
}

function pauseAudioPool() {
  state.audioPool.forEach((item) => {
    item.element.pause();
  });
}

function ensureAudioRouting() {
  if (state.audioRouting.initialized) {
    return;
  }

  const context = getAudioContext();
  const outputGain = context.createGain();
  const previewVideoSource = context.createMediaElementSource(previewVideo);
  const previewVideoGain = context.createGain();

  previewVideoSource.connect(previewVideoGain);
  previewVideoGain.connect(outputGain);
  outputGain.connect(context.destination);

  state.audioRouting = {
    initialized: true,
    context,
    outputGain,
    previewVideoSource,
    previewVideoGain,
  };

  state.audioPool.forEach(connectAudioPoolItem);
  previewVideo.muted = true;
  previewVideo.volume = 1;
}

function updateAudioRouting(activeVideoClip, activeAudioClips) {
  const baseGain = state.preview.muted ? 0 : state.preview.volume / 100;
  const perAudioGain = activeAudioClips.length
    ? baseGain / Math.max(1, Math.sqrt(activeAudioClips.length))
    : 0;

  if (state.audioRouting.initialized) {
    state.audioRouting.previewVideoGain.gain.value =
      !activeVideoClip || activeAudioClips.length > 0 ? 0 : baseGain;

    state.audioPool.forEach((item, index) => {
      if (item.gain) {
        item.gain.gain.value = index < activeAudioClips.length ? perAudioGain : 0;
      }
      item.element.volume = 1;
      item.element.muted = true;
    });

    previewVideo.volume = 1;
    previewVideo.muted = true;
    return;
  }

  previewVideo.volume = !activeVideoClip || activeAudioClips.length > 0 || state.preview.muted ? 0 : baseGain;
  previewVideo.muted = state.preview.muted || activeAudioClips.length > 0;

  state.audioPool.forEach((item, index) => {
    item.element.volume = index < activeAudioClips.length ? perAudioGain : 0;
    item.element.muted = state.preview.muted || index >= activeAudioClips.length;
  });
}

function getExportMimeType() {
  if (!window.MediaRecorder) {
    return "";
  }

  const candidates = [
    "video/webm;codecs=vp9,opus",
    "video/webm;codecs=vp8,opus",
    "video/webm",
  ];

  return candidates.find((mimeType) => MediaRecorder.isTypeSupported(mimeType)) ?? "";
}

function drawCoverVideoFrame(ctx, canvas, videoElement) {
  const sourceWidth = videoElement.videoWidth;
  const sourceHeight = videoElement.videoHeight;
  if (!sourceWidth || !sourceHeight) {
    return;
  }

  const sourceRatio = sourceWidth / sourceHeight;
  const canvasRatio = canvas.width / canvas.height;
  let drawWidth = canvas.width;
  let drawHeight = canvas.height;
  let drawX = 0;
  let drawY = 0;

  if (sourceRatio > canvasRatio) {
    drawHeight = canvas.height;
    drawWidth = drawHeight * sourceRatio;
    drawX = (canvas.width - drawWidth) / 2;
  } else {
    drawWidth = canvas.width;
    drawHeight = drawWidth / sourceRatio;
    drawY = (canvas.height - drawHeight) / 2;
  }

  ctx.drawImage(videoElement, drawX, drawY, drawWidth, drawHeight);
}

function drawExportFrame(activeVideoClip) {
  if (!state.export.active || !state.export.canvas || !state.export.ctx) {
    return;
  }

  const { canvas, ctx } = state.export;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const backdrop = ctx.createLinearGradient(0, 0, 0, canvas.height);
  backdrop.addColorStop(0, "#0b0f16");
  backdrop.addColorStop(1, "#06080d");
  ctx.fillStyle = backdrop;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (activeVideoClip && previewVideo.readyState >= 2 && previewVideo.videoWidth > 0) {
    drawCoverVideoFrame(ctx, canvas, previewVideo);
  } else {
    ctx.fillStyle = "rgba(255,255,255,0.06)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.88)";
    ctx.font = '700 34px "Segoe UI Variable", "Microsoft YaHei UI", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText("Audio Timeline Export", canvas.width / 2, canvas.height / 2 - 12);
    ctx.font = '400 20px "Segoe UI Variable", "Microsoft YaHei UI", sans-serif';
    ctx.fillStyle = "rgba(255,255,255,0.62)";
    ctx.fillText("当前时间点没有可显示的视频片段", canvas.width / 2, canvas.height / 2 + 28);
  }

  const overlayHeight = 82;
  ctx.fillStyle = "rgba(8,10,16,0.48)";
  ctx.fillRect(24, canvas.height - overlayHeight - 24, canvas.width - 48, overlayHeight);
  ctx.strokeStyle = "rgba(255,255,255,0.1)";
  ctx.strokeRect(24, canvas.height - overlayHeight - 24, canvas.width - 48, overlayHeight);
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.font = '700 24px "Segoe UI Variable", "Microsoft YaHei UI", sans-serif';
  ctx.textAlign = "left";
  ctx.fillText(formatClock(state.playheadTime, true), 48, canvas.height - 62);
  ctx.font = '400 18px "Segoe UI Variable", "Microsoft YaHei UI", sans-serif';
  ctx.fillStyle = "rgba(255,255,255,0.66)";
  ctx.fillText(previewSourceLabel.textContent || "Timeline Export", 48, canvas.height - 30);
}

function syncPreviewMedia() {
  const activeVideoClip = getActiveVideoClip(state.playheadTime);
  const activeAudioClips = getActiveAudioClips(state.playheadTime);
  const normalizedVolume = state.preview.volume / 100;

  syncMediaElement(
    previewVideo,
    activeVideoClip,
    activeVideoClip ? activeVideoClip.trimStart + (state.playheadTime - activeVideoClip.timelineStart) : 0,
    state.preview.playing,
    {
      playbackRate: state.preview.speed,
      volume: normalizedVolume,
      muted: state.preview.muted || activeAudioClips.length > 0,
    },
  );

  ensureAudioPoolSize(activeAudioClips.length);
  activeAudioClips.forEach((clip, index) => {
    const item = state.audioPool[index];
    connectAudioPoolItem(item);
    syncMediaElement(
      item.element,
      clip,
      clip.trimStart + (state.playheadTime - clip.timelineStart),
      state.preview.playing,
      {
        playbackRate: state.preview.speed,
        volume: normalizedVolume,
        muted: state.preview.muted,
      },
    );
  });

  state.audioPool.slice(activeAudioClips.length).forEach((item) => {
    if (item.element.dataset.assetId) {
      clearMediaElement(item.element);
    } else {
      item.element.pause();
    }
  });

  updateAudioRouting(activeVideoClip, activeAudioClips);
  previewTimeLabel.textContent = formatClock(state.playheadTime, true);

  if (activeVideoClip) {
    previewEmpty.classList.add("hidden");
    const track = getTrackById(activeVideoClip.trackId);
    previewSourceLabel.textContent = `${getClipName(activeVideoClip)} / ${getTrackLabel(track)}`;
  } else if (activeAudioClips.length) {
    previewEmpty.classList.remove("hidden");
    const firstAudioClip = activeAudioClips[0];
    const track = getTrackById(firstAudioClip.trackId);
    previewSourceLabel.textContent = `${getClipName(firstAudioClip)} / ${getTrackLabel(track)} 仅音频`;
  } else {
    previewEmpty.classList.remove("hidden");
    previewSourceLabel.textContent = "等待添加视频或音频";
  }

  if (state.export.active) {
    drawExportFrame(activeVideoClip);
  }
}

function stopPlaybackLoop() {
  if (state.preview.rafId) {
    cancelAnimationFrame(state.preview.rafId);
    state.preview.rafId = 0;
  }
}

function pausePlayback() {
  state.preview.playing = false;
  stopPlaybackLoop();
  previewVideo.pause();
  pauseAudioPool();
  updateReadouts();
  syncPreviewMedia();
}

function playbackTick(now) {
  if (!state.preview.playing) {
    return;
  }

  const elapsedSeconds = ((now - state.preview.anchorPerf) / 1000) * state.preview.speed;
  state.playheadTime = clamp(state.preview.anchorTime + elapsedSeconds, 0, timelineContentDuration());
  const previousOffset = state.view.offset;
  ensurePlayheadVisible();

  if (Math.abs(previousOffset - state.view.offset) > 0.0001) {
    renderTimeline();
  } else {
    positionPlayhead();
  }

  updateReadouts();
  syncPreviewMedia();

  if (state.playheadTime >= timelineContentDuration()) {
    if (state.export.active) {
      stopExportRecording();
    }
    pausePlayback();
    return;
  }

  state.preview.rafId = requestAnimationFrame(playbackTick);
}

async function startPlayback() {
  if (!getAllClips().length) {
    return;
  }

  try {
    ensureAudioRouting();
    const context = getAudioContext();
    if (context.state === "suspended") {
      await context.resume();
    }
  } catch (error) {
    console.debug("audio context skipped", error);
  }

  if (state.playheadTime >= timelineContentDuration()) {
    state.playheadTime = 0;
  }

  state.preview.playing = true;
  state.preview.anchorPerf = performance.now();
  state.preview.anchorTime = state.playheadTime;
  updateReadouts();
  syncPreviewMedia();
  stopPlaybackLoop();
  state.preview.rafId = requestAnimationFrame(playbackTick);
}

function togglePlayback() {
  if (state.preview.playing) {
    pausePlayback();
    return;
  }

  startPlayback();
}

function replayPlayback() {
  pausePlayback();
  state.playheadTime = 0;
  renderAll();
  startPlayback();
}

function seekBy(seconds) {
  state.playheadTime = clamp(state.playheadTime + seconds, 0, timelineContentDuration());
  ensurePlayheadVisible();

  if (state.preview.playing) {
    state.preview.anchorPerf = performance.now();
    state.preview.anchorTime = state.playheadTime;
  }

  renderAll();
}

function setPlaybackSpeed(nextSpeed) {
  state.preview.speed = nextSpeed;
  if (state.preview.playing) {
    state.preview.anchorPerf = performance.now();
    state.preview.anchorTime = state.playheadTime;
  }
  updateReadouts();
  syncPreviewMedia();
}

function setVolume(nextVolume) {
  state.preview.volume = clamp(nextVolume, 0, 100);
  updateReadouts();
  syncPreviewMedia();
}

function toggleMute() {
  state.preview.muted = !state.preview.muted;
  updateReadouts();
  syncPreviewMedia();
}

function selectClip(clipId) {
  state.selectedTrackIds = [];
  state.selectedClipId = clipId;
  state.selectedClipIds = clipId == null ? [] : [clipId];
  updateReadouts();
}

function beginPlayheadDrag(event) {
  pausePlayback();
  state.playheadGuideVisible = true;
  state.drag = {
    pointerId: event.pointerId,
    type: "playhead",
  };
  state.playheadTime = clamp(clientXToTime(event.clientX), 0, timelineContentDuration());
  ensurePlayheadVisible();
  renderAll();
}

function toggleClipSelection(clipId) {
  state.selectedTrackIds = [];

  if (isClipSelected(clipId)) {
    state.selectedClipIds = state.selectedClipIds.filter((id) => id !== clipId);
  } else {
    state.selectedClipIds = [...state.selectedClipIds, clipId];
  }

  normalizeClipSelectionState();
  updateReadouts();
}

function selectTrack(trackId) {
  clearClipSelection();
  state.selectedTrackIds = trackId == null ? [] : [trackId];
  updateReadouts();
}

function toggleTrackSelection(trackId) {
  clearClipSelection();

  if (isTrackSelected(trackId)) {
    state.selectedTrackIds = state.selectedTrackIds.filter((id) => id !== trackId);
  } else {
    state.selectedTrackIds = [...state.selectedTrackIds, trackId];
  }

  updateReadouts();
}

function beginDrag(event, type, clip) {
  event.preventDefault();
  event.stopPropagation();
  pausePlayback();

  state.drag = {
    pointerId: event.pointerId,
    clipId: clip.id,
    type,
    startX: event.clientX,
    baseTimelineStart: clip.timelineStart,
    baseTrimStart: clip.trimStart,
    baseTrimEnd: clip.trimEnd,
    basePixelsPerSecond: pixelsPerSecond(),
    baseZoomPercent: state.view.zoomPercent,
  };
}

function handleDragMove(event) {
  if (!state.drag || event.pointerId !== state.drag.pointerId) {
    return;
  }

  if (state.drag.type === "playhead") {
    state.playheadGuideVisible = true;
    state.playheadTime = clamp(clientXToTime(event.clientX), 0, timelineContentDuration());
    ensurePlayheadVisible();
    renderAll();
    return;
  }

  const clip = getClipById(state.drag.clipId);
  if (!clip) {
    return;
  }

  if (state.drag.type === "zoom") {
    const zoomDelta = (event.clientX - state.drag.startX) / 2.8;
    const anchor = clip.timelineStart + visibleDuration(clip) * 0.5;
    applyZoomPercent(state.drag.baseZoomPercent + zoomDelta, anchor);
    return;
  }

  const deltaSeconds = (event.clientX - state.drag.startX) / state.drag.basePixelsPerSecond;

  if (state.drag.type === "move") {
    clip.timelineStart = Math.max(0, state.drag.baseTimelineStart + deltaSeconds);
    renderAll();
    return;
  }

  if (state.drag.type === "trim-start") {
    const nextTrimStart = clamp(
      state.drag.baseTrimStart + deltaSeconds,
      0,
      state.drag.baseTrimEnd - minimumClipLength,
    );
    clip.trimStart = nextTrimStart;
    clip.timelineStart = Math.max(
      0,
      state.drag.baseTimelineStart + (nextTrimStart - state.drag.baseTrimStart),
    );
    renderAll();
    return;
  }

  if (state.drag.type === "trim-end") {
    clip.trimEnd = clamp(
      state.drag.baseTrimEnd + deltaSeconds,
      clip.trimStart + minimumClipLength,
      clip.duration,
    );
    renderAll();
  }
}

function endDrag(event) {
  if (!state.drag || event.pointerId !== state.drag.pointerId) {
    return;
  }

  if (state.drag.type === "playhead") {
    state.playheadGuideVisible = false;
    state.drag = null;
    renderAll();
    return;
  }

  state.drag = null;
  renderAll();
}

function handleTimelinePointerDown(event) {
  const duplicateButton = event.target.closest('[data-role="duplicate"]');
  if (duplicateButton) {
    const clipId = Number(duplicateButton.closest(".timeline-clip").dataset.clipId);
    duplicateClipById(clipId);
    return;
  }

  if (event.target === rulerCanvas || event.target.closest(".playhead-cap")) {
    beginPlayheadDrag(event);
    return;
  }

  const clipElement = event.target.closest(".timeline-clip");
  if (clipElement) {
    const clipId = Number(clipElement.dataset.clipId);
    const clip = getClipById(clipId);
    if (!clip) {
      return;
    }

    const actionRole = event.target.closest("[data-role]")?.dataset.role ?? "move";
    if (isToggleSelectionEvent(event) && actionRole === "move") {
      toggleClipSelection(clipId);
      renderTimeline();
      return;
    }

    selectClip(clipId);
    renderTimeline();
    beginDrag(event, actionRole, clip);
    return;
  }

  const trackElement = event.target.closest(".track-lane");
  if (trackElement) {
    pausePlayback();
    state.playheadTime = clamp(clientXToTime(event.clientX), 0, timelineContentDuration());
    const trackId = Number(trackElement.dataset.trackId);
    if (isToggleSelectionEvent(event)) {
      toggleTrackSelection(trackId);
    } else {
      selectTrack(trackId);
    }
    renderAll();
    return;
  }

  if (event.target === rulerCanvas || event.target === timelineStage || event.target === tracksStack) {
    clearSelections();
    pausePlayback();
    state.playheadTime = clamp(clientXToTime(event.clientX), 0, timelineContentDuration());
    renderAll();
  }
}

function handleTimelineWheel(event) {
  event.preventDefault();

  if (event.ctrlKey) {
    applyZoomPercent(
      state.view.zoomPercent + (event.deltaY < 0 ? 4 : -4),
      clientXToTime(event.clientX),
    );
    return;
  }

  const dominantDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
  const offsetDelta = (dominantDelta / 900) * state.view.windowDuration;
  state.view.offset = clamp(state.view.offset + offsetDelta, 0, maxOffset());
  renderAll();
}

function addTrack(kind, { shouldRender = true } = {}) {
  const track = createTrack(kind);
  if (kind === "video") {
    const lastVideoIndex = state.tracks.reduce((lastIndex, item, index) => {
      return item.kind === "video" ? index : lastIndex;
    }, -1);
    state.tracks.splice(lastVideoIndex + 1, 0, track);
  } else {
    state.tracks.push(track);
  }

  if (shouldRender) {
    renderAll();
  }

  return track;
}

function ensureTrackBaseline() {
  if (!getTracksByKind("video").length) {
    addTrack("video", { shouldRender: false });
  }

  if (!getTracksByKind("audio").length) {
    addTrack("audio", { shouldRender: false });
  }
}

function registerAsset(asset) {
  state.assets.set(asset.id, asset);
  return asset;
}

function retainAsset(assetId) {
  const asset = getAssetById(assetId);
  if (asset) {
    asset.refCount += 1;
  }
}

function releaseAsset(assetId) {
  const asset = getAssetById(assetId);
  if (!asset) {
    return;
  }

  asset.refCount = Math.max(0, asset.refCount - 1);
  if (asset.refCount > 0) {
    return;
  }

  URL.revokeObjectURL(asset.objectUrl);
  state.assets.delete(assetId);
}

function buildClipFromAsset(asset, trackId) {
  retainAsset(asset.id);
  return {
    id: state.nextClipId++,
    trackId,
    type: asset.type,
    assetId: asset.id,
    duration: asset.duration,
    trimStart: 0,
    trimEnd: asset.duration,
    timelineStart: 0,
  };
}

function appendClipToTrack(track, clip) {
  const laneEnd = track.clips.reduce((maxEndValue, laneClip) => {
    return Math.max(maxEndValue, clipEnd(laneClip));
  }, 0);

  clip.timelineStart = laneEnd;
  track.clips.push(clip);
  state.selectedTrackIds = [];
  state.selectedClipId = clip.id;
  state.selectedClipIds = [clip.id];
  state.playheadTime = clip.timelineStart;
}

function getFirstClipId() {
  return getAllClips()[0]?.id ?? null;
}

function clearAllClips() {
  pausePlayback();
  clearMediaElement(previewVideo);
  state.audioPool.forEach((item) => clearMediaElement(item.element));
  getAllClips().forEach((clip) => releaseAsset(clip.assetId));
  state.tracks.forEach((track) => {
    track.clips = [];
  });
  clearSelections();
  state.playheadTime = 0;
  state.view.offset = 0;
  state.view.windowDuration = 12;
  state.view.zoomPercent = 0;
  renderAll();
}

function deleteSelectedClip() {
  if (state.selectedTrackIds.length) {
    pausePlayback();
    const selectedTrackIdSet = new Set(state.selectedTrackIds);
    const removedTracks = state.tracks.filter((track) => selectedTrackIdSet.has(track.id));

    if (!removedTracks.length) {
      return;
    }

    removedTracks.forEach((track) => {
      track.clips.forEach((clip) => releaseAsset(clip.assetId));
    });

    state.tracks = state.tracks.filter((track) => !selectedTrackIdSet.has(track.id));
    ensureTrackBaseline();
    clearSelections();
    state.playheadTime = clamp(state.playheadTime, 0, timelineContentDuration());
    renderAll();
    return;
  }

  const selectedClipIdSet = new Set(state.selectedClipIds);
  if (!selectedClipIdSet.size) {
    return;
  }

  pausePlayback();
  state.tracks.forEach((track) => {
    const clipsToDelete = track.clips.filter((clip) => selectedClipIdSet.has(clip.id));
    clipsToDelete.forEach((clip) => releaseAsset(clip.assetId));
    track.clips = track.clips.filter((clip) => !selectedClipIdSet.has(clip.id));
  });

  clearClipSelection();
  state.playheadTime = clamp(state.playheadTime, 0, timelineContentDuration());
  renderAll();
}

function duplicateClipById(clipId) {
  const clip = getClipById(clipId);
  if (!clip) {
    return;
  }

  const track = getTrackById(clip.trackId);
  if (!track) {
    return;
  }

  pausePlayback();
  retainAsset(clip.assetId);
  const duplicate = {
    ...clip,
    id: state.nextClipId++,
    timelineStart: clipEnd(clip) + 0.12,
  };
  track.clips.push(duplicate);
  state.selectedTrackIds = [];
  state.selectedClipId = duplicate.id;
  state.selectedClipIds = [duplicate.id];
  state.playheadTime = duplicate.timelineStart;
  renderAll();
}

function waitForMediaEvent(media, successEvent, errorEvent = "error") {
  return new Promise((resolve, reject) => {
    media.addEventListener(successEvent, resolve, { once: true });
    media.addEventListener(errorEvent, reject, { once: true });
  });
}

function seekMedia(media, timeInSeconds) {
  return new Promise((resolve, reject) => {
    const onSeeked = () => {
      cleanup();
      resolve();
    };

    const onError = () => {
      cleanup();
      reject(new Error("seek"));
    };

    const cleanup = () => {
      media.removeEventListener("seeked", onSeeked);
      media.removeEventListener("error", onError);
    };

    media.addEventListener("seeked", onSeeked);
    media.addEventListener("error", onError);

    try {
      media.currentTime = timeInSeconds;
    } catch (error) {
      cleanup();
      reject(error);
    }
  });
}

function prepareThumbnailImages(thumbnails) {
  return thumbnails.map((src) => {
    const image = new Image();
    image.src = src;
    image.addEventListener("load", () => {
      renderTimeline();
    });
    return image;
  });
}

async function loadMediaDuration(objectUrl, tagName) {
  return new Promise((resolve, reject) => {
    const media = document.createElement(tagName);
    media.preload = "metadata";

    media.addEventListener(
      "loadedmetadata",
      () => {
        const duration = Number.isFinite(media.duration) ? media.duration : 0;
        resolve(duration);
      },
      { once: true },
    );

    media.addEventListener(
      "error",
      () => {
        reject(new Error("metadata"));
      },
      { once: true },
    );

    media.src = objectUrl;
  });
}

async function buildAudioPeaks(file, duration, seed) {
  if (file.size > 24 * 1024 * 1024 || duration > 20 * 60) {
    return buildSeededPeaks(seed, seededPeakCount);
  }

  try {
    const context = getAudioContext();
    const buffer = await file.arrayBuffer();
    const audioBuffer = await context.decodeAudioData(buffer.slice(0));
    return buildPeaksFromSamples(audioBuffer.getChannelData(0), seededPeakCount);
  } catch (error) {
    console.debug("audio decode fallback", error);
    return buildSeededPeaks(seed, seededPeakCount);
  }
}

async function buildVideoThumbnails(objectUrl, duration) {
  if (!duration) {
    return [];
  }

  const video = document.createElement("video");
  video.preload = "auto";
  video.muted = true;
  video.playsInline = true;
  video.src = objectUrl;

  try {
    await waitForMediaEvent(video, "loadeddata");
    const sampleCount = clamp(Math.round(duration / 1200) + 10, 10, 18);
    const safeDuration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : duration;
    const maxSeek = Math.max(0, safeDuration - 0.08);
    const captureTimes = Array.from({ length: sampleCount }, (_, index) =>
      sampleCount === 1 ? 0 : (maxSeek * index) / (sampleCount - 1),
    );

    const canvas = document.createElement("canvas");
    const width = 200;
    const ratio = video.videoWidth > 0 ? video.videoHeight / video.videoWidth : 9 / 16;
    canvas.width = width;
    canvas.height = Math.max(110, Math.round(width * ratio));
    const ctx = canvas.getContext("2d");
    const thumbnails = [];

    for (const time of captureTimes) {
      await seekMedia(video, time);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCoverVideoFrame(ctx, canvas, video);
      thumbnails.push(canvas.toDataURL("image/jpeg", 0.76));
    }

    return thumbnails;
  } catch (error) {
    console.debug("thumbnail capture fallback", error);
    return [];
  } finally {
    video.removeAttribute("src");
    video.load();
  }
}

async function createVideoAsset(file) {
  const objectUrl = URL.createObjectURL(file);
  const duration = Math.max(await loadMediaDuration(objectUrl, "video"), minimumClipLength);
  const seed = seedFromString(`${file.name}:${file.size}`);
  const thumbnails = await buildVideoThumbnails(objectUrl, duration);

  return registerAsset({
    id: state.nextAssetId++,
    type: "video",
    name: file.name,
    objectUrl,
    duration,
    seed,
    refCount: 0,
    thumbnails,
    thumbnailImages: prepareThumbnailImages(thumbnails),
  });
}

async function createAudioAsset(file) {
  const objectUrl = URL.createObjectURL(file);
  const duration = Math.max(await loadMediaDuration(objectUrl, "audio"), minimumClipLength);
  const seed = seedFromString(`${file.name}:${file.size}`);
  const peaks = await buildAudioPeaks(file, duration, seed);

  return registerAsset({
    id: state.nextAssetId++,
    type: "audio",
    name: file.name,
    objectUrl,
    duration,
    seed,
    refCount: 0,
    peaks,
    thumbnailImages: [],
  });
}

async function loadFilesIntoKind(fileList, kind) {
  const files = Array.from(fileList);
  if (!files.length) {
    return;
  }

  pausePlayback();
  let targetTrack = getTrackForNewClip(kind);
  if (!targetTrack) {
    targetTrack = addTrack(kind, { shouldRender: false });
  }

  let lastClip = null;
  for (const file of files) {
    try {
      const asset = kind === "video" ? await createVideoAsset(file) : await createAudioAsset(file);
      const clip = buildClipFromAsset(asset, targetTrack.id);
      appendClipToTrack(targetTrack, clip);
      lastClip = clip;
    } catch (error) {
      console.error(`load ${file.name} failed`, error);
    }
  }

  if (lastClip) {
    state.selectedTrackIds = [];
    state.selectedClipId = lastClip.id;
    state.selectedClipIds = [lastClip.id];
    state.playheadTime = lastClip.timelineStart;
    fitTimelineView();
    renderAll();
  }
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 2000);
}

function cleanupExportState(message) {
  if (state.export.audioDestination && state.audioRouting.initialized) {
    try {
      state.audioRouting.outputGain.disconnect(state.export.audioDestination);
    } catch (error) {
      console.debug("export disconnect skipped", error);
    }
  }

  if (state.export.stream) {
    state.export.stream.getTracks().forEach((track) => track.stop());
  }

  const previous = state.export.previous;
  state.export = {
    active: false,
    status: message,
    canvas: null,
    ctx: null,
    stream: null,
    recorder: null,
    audioDestination: null,
    chunks: [],
    previous: null,
    stopping: false,
  };

  if (previous) {
    state.playheadTime = previous.playheadTime;
    state.view.offset = previous.offset;
    state.view.windowDuration = previous.windowDuration;
    state.view.zoomPercent = previous.zoomPercent;
    state.preview.speed = previous.speed;
  }

  clampViewState();
  renderAll();
}

function stopExportRecording() {
  if (!state.export.active || state.export.stopping) {
    return;
  }

  state.export.stopping = true;
  if (state.export.recorder && state.export.recorder.state !== "inactive") {
    state.export.recorder.stop();
  } else {
    cleanupExportState("导出已取消");
  }
}

async function exportTimelineVideo() {
  if (state.export.active || !getAllClips().length) {
    return;
  }

  const mimeType = getExportMimeType();
  if (!mimeType) {
    state.export.status = "当前浏览器不支持 WebM 导出";
    updateReadouts();
    return;
  }

  pausePlayback();

  try {
    ensureAudioRouting();
    const context = getAudioContext();
    if (context.state === "suspended") {
      await context.resume();
    }

    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = 1280;
    exportCanvas.height = 720;
    const exportCtx = exportCanvas.getContext("2d");
    const canvasStream = exportCanvas.captureStream(30);
    const audioDestination = context.createMediaStreamDestination();

    state.audioRouting.outputGain.connect(audioDestination);

    const exportStream = new MediaStream([
      ...canvasStream.getVideoTracks(),
      ...audioDestination.stream.getAudioTracks(),
    ]);

    const recorder = new MediaRecorder(exportStream, { mimeType });
    const previous = {
      playheadTime: state.playheadTime,
      offset: state.view.offset,
      windowDuration: state.view.windowDuration,
      zoomPercent: state.view.zoomPercent,
      speed: state.preview.speed,
    };

    state.export = {
      active: true,
      status: "导出中…",
      canvas: exportCanvas,
      ctx: exportCtx,
      stream: exportStream,
      recorder,
      audioDestination,
      chunks: [],
      previous,
      stopping: false,
    };

    recorder.addEventListener("dataavailable", (event) => {
      if (event.data && event.data.size > 0) {
        state.export.chunks.push(event.data);
      }
    });

    recorder.addEventListener("stop", () => {
      const blob = new Blob(state.export.chunks, { type: mimeType });
      const stamp = new Date().toISOString().replaceAll(":", "-").slice(0, 19);
      downloadBlob(blob, `timeline-export-${stamp}.webm`);
      cleanupExportState("导出完成");
    });

    recorder.addEventListener("error", () => {
      cleanupExportState("导出失败");
    });

    state.playheadTime = 0;
    state.preview.speed = 1;
    ensurePlayheadVisible();
    renderAll();
    drawExportFrame(getActiveVideoClip(state.playheadTime));
    recorder.start(250);
    await startPlayback();
  } catch (error) {
    console.error("export failed", error);
    cleanupExportState("导出失败");
  }
}

videoInput.addEventListener("change", async (event) => {
  await loadFilesIntoKind(event.target.files, "video");
  event.target.value = "";
});

audioInput.addEventListener("change", async (event) => {
  await loadFilesIntoKind(event.target.files, "audio");
  event.target.value = "";
});

themeStops.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.dataset.theme);
  });
});

fitViewButton.addEventListener("click", () => {
  fitTimelineView();
});

deleteClipButton.addEventListener("click", () => {
  deleteSelectedClip();
});

resetButton.addEventListener("click", () => {
  clearAllClips();
});

addVideoTrackButton.addEventListener("click", () => {
  addTrack("video");
});

addAudioTrackButton.addEventListener("click", () => {
  addTrack("audio");
});

offsetSlider.addEventListener("input", (event) => {
  const ratio = Number(event.target.value) / 1000;
  setViewOffset(maxOffset() * ratio);
});

zoomSlider.addEventListener("input", (event) => {
  applyZoomPercent(Number(event.target.value), state.playheadTime);
});

timelineStage.addEventListener("pointerdown", handleTimelinePointerDown);
timelineStage.addEventListener("wheel", handleTimelineWheel, { passive: false });
window.addEventListener("pointermove", handleDragMove);
window.addEventListener("pointerup", endDrag);
window.addEventListener("pointercancel", endDrag);
backwardButton.addEventListener("click", () => {
  seekBy(-15);
});
playButton.addEventListener("click", () => {
  togglePlayback();
});
forwardButton.addEventListener("click", () => {
  seekBy(15);
});
replayButton.addEventListener("click", () => {
  replayPlayback();
});
exportButton.addEventListener("click", () => {
  exportTimelineVideo();
});
muteButton.addEventListener("click", () => {
  toggleMute();
});
volumeSlider.addEventListener("input", (event) => {
  setVolume(Number(event.target.value));
});

speedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPlaybackSpeed(Number(button.dataset.speed));
  });
});

window.addEventListener("resize", () => {
  positionThemeKnob();
  renderAll();
});

window.addEventListener("beforeunload", () => {
  getAllClips().forEach((clip) => releaseAsset(clip.assetId));
});

applyTheme(THEMES[0].id, { initial: true });
renderAll();
