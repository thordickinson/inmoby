const excel = require('excel4node');
const { newTempFilePath } = require('./util');

async function saveBookAsync(book, path) {
    return new Promise((resolve, reject) => {
        book.write(path, (err) => {
            if (err) reject()
            else resolve()
        })
    })
}

class ExcelBuilder {
    constructor() {
        this.book = new excel.Workbook();
        this.styles = {}
    }

    sheet(name) {
        this.sheet = this.book.addWorksheet(name);
        this.rowIndex = 1
        this.columnIndex = 1
        this._rowStyle = undefined
        return this;
    }

    namedStyle(name, style) {
        const s = this.book.createStyle(style)
        this.styles[name] = s
    }

    headers(columns) {
        if (!this.sheet) throw new Error("Create a sheet first")
        columns.forEach(({ title, width }, index) => {
            this.sheet.cell(this.rowIndex, index + 1).string(title)
            this.sheet.column(index + 1).setWidth(width)
        })
        this.sheet.row(this.rowIndex).freeze()
        this.nextRow()
        return this
    }

    rowStyle(styleName) {
        this._rowStyle = this.styles[styleName]
    }

    nextRow() {
        this.rowIndex++
        this.columnIndex = 1
        this._rowStyle = undefined
        return this
    }

    string(value) {
        const cell = this.sheet.cell(this.rowIndex, this.columnIndex).string(value)
        if (this._rowStyle) cell.style(this._rowStyle)
        this.columnIndex++
        return this
    }

    number(value) {
        const cell = this.sheet.cell(this.rowIndex, this.columnIndex).number(value)
        if (this._rowStyle) cell.style(this._rowStyle)
        this.columnIndex++
        return this
    }

    currency(value) {
        const cell = this.sheet.cell(this.rowIndex, this.columnIndex).number(value)
        if (this._rowStyle) cell.style(this._rowStyle)
        this.columnIndex++
        return this
    }

    async saveTemp(prefix) {
        const fileName = newTempFilePath(prefix, ".xlsx")
        await saveBookAsync(this.book, fileName)
        return fileName
    }
}

module.exports = { saveBookAsync, ExcelBuilder }
