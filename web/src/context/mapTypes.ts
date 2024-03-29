export interface BaseLayer {
  id: string
  name: string
  url: string
}

export interface OverlayLayer {
  id: string
  name: string
  url: string
}

export interface MapState {
  baseLayer: BaseLayer
  overlayLayers: OverlayLayer[]
}

export interface AnyAction {
  type: string
  payload?: any
}
