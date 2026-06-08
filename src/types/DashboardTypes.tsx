export interface OpenMeteoResponse {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_units: CurrentUnits
  current: Current
  hourly_units: HourlyUnits
  hourly: Hourly
  daily_units: DailyUnits
  daily: Daily
}

export interface CurrentUnits {
  time: string
  interval: string
  relative_humidity_2m: string
  temperature_2m: string
}

export interface Current {
  time: string
  interval: number
  relative_humidity_2m: number
  temperature_2m: number
}

export interface HourlyUnits {
  time: string
  temperature_2m: string
  relative_humidity_2m: string
}

export interface Hourly {
  time: string[]
  temperature_2m: number[]
  relative_humidity_2m: number[]
}

export interface DailyUnits {
  time: string
  sunrise: string
  sunset: string
  temperature_2m_max: string
}

export interface Daily {
  time: string[]
  sunrise: string[]
  sunset: string[]
  temperature_2m_max: number[]
}
