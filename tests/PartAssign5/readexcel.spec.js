import { test} from '@playwright/test';
import ExcelJS from "exceljs"
test('Read login data from Excel', async ({ page }) => {

   const workbook = new ExcelJS.Workbook();
   await workbook.xlsx.readFile("tests/PartAssign5/Obsqura_Testing.xlsx")
    const worksheet = workbook.getWorksheet("Sheet1")
    //console.log("Worsheet Found:" +worksheet.name)
    const rowcount =worksheet.rowCount;
    for(const row of worksheet.getRows(2,rowcount-1)|| [])
    {
        if (row.cellCount>0)
        {
            const name =row.getCell(1).value
            const age = row.getCell(2).value
            const city =row.getCell(3).value
            console.log(`Name :${name},Age :${age},City :${city}`)


        }
    }
});

