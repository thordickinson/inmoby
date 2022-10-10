export interface Theme {
    mainColor: string
    accentColor: string
}

export interface Agency {
    name: string
    logoUrl: string
    key: string
    createdAt: Date
    mainLine: string
    theme: Theme
}

export interface Agent {

}

export interface Price {
    currency: string
    price: number
}

export interface Property {
    _id: string
    title: string
    active: boolean
    agency: Agency
    agents: Agent[]
    description: string
    features: any
    images: string[]
    location: any
    media: any[]
    prices: Map<String, Price[]>
}
