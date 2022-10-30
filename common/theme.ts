import { createContext, CSSProperties } from "react";
import { Agency } from "../model/agency";
import { DefaultAgency } from "./contexts";
import tinycolor from "tinycolor2";

export class Theme {
    __valueMap: Map<string, string>;

    constructor(values: Map<string, string>) {
        this.__valueMap = values
    }

    getPrimaryColor(): tinycolor.Instance {
        return tinycolor(this.__valueMap.get("primary.color"))
    }

    getSecondaryColor(): tinycolor.Instance {
        return tinycolor(this.__valueMap.get("secondary.color"))
    }

    getFontFamily(elementKey: string): string | undefined {
        return this.getValue(elementKey, "fontFamily");
    }

    getBackground(elementKey: string): string | undefined {
        return this.getValue(elementKey, "background", "white");
    }
    getForeground(elementKey: string): string | undefined {
        return this.getValue(elementKey, "color", "black")
    }

    getStyle(key: string): CSSProperties {
        const backgroundColor = this.getBackground(key);
        const color = this.getForeground(key);
        const fontFamily = this.getFontFamily(key);
        return { backgroundColor, color, fontFamily }
    }

    darken(color: string): string {
        return tinycolor(color).darken().toHexString()
    }

    lighten(color: string): string {
        return tinycolor(color).lighten().toHexString()
    }

    getValue(elementKey: string, suffix: string, _default?: string): string | undefined {
        const fullKey = `${elementKey}.${suffix}`
        const value = this.__valueMap.get(fullKey)
        if (value) return value
        const from = elementKey.indexOf(".")
        if (from == -1) return _default
        return this.getValue(elementKey.substring(from + 1), suffix, _default)
    }

}

export function makeTheme(agency?: Agency): Theme {
    if (!agency) agency = DefaultAgency
    const { theme } = agency
    const values = new Map<string, string>()
    values.set("primary.color", theme.primaryColor)
    values.set("secondary.color", theme.secondaryColor)

    //primaryFont, secondaryFont
    //primaryColor, secondaryColor

    //"h1.color", "h2.color", "h3.color", "h4.color", "h5.color"
    //"p.color"
    //"primary.color", "secondary.color"
    return new Theme(values)
}

export const DefaultTheme = makeTheme(DefaultAgency)
export const ThemeContext = createContext<Theme>(DefaultTheme);