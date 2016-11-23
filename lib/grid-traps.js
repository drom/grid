'use strict';

function gridTraps (desc) {
    // initial empty arrays
    var arr = Array.apply(null, Array(desc.hmax))
    .map(function () {
        return Array.apply(null, Array(desc.wmax))
            .map(function () { return {}; });
    });
    // console.log(arr);
    // set borders and links
    arr.forEach(function (row, y) {
        row.forEach(function (cell, x, theRow) {
            if (x <= desc.wmin) {
                cell.w = 0;
                cell.w0 = cell; // self reference
            } else {
                cell.w = desc.size * (x + 0.25);
                cell.w0 = theRow[x - 1];
            }
            if (x === desc.wmax - 1) {
                cell.e = 1e12; // TODO better overflow handler
                cell.e0 = cell;  // self reference
            } else {
                cell.e = desc.size * (x + 1.75);
                cell.e0 = theRow[x + 1];
            }

            if (y <= desc.hmin) {
                cell.n = 0;
                cell.n0 = cell; // self reference
            } else {
                cell.n = desc.size * (y + 0.25);
                cell.n0 = arr[y - 1][x];
            }
            if (y === desc.hmax - 1) {
                cell.s = 1e12; // TODO better overflow handler
                cell.s0 = cell;  // self reference
            } else {
                cell.s = desc.size * (y + 1.75);
                cell.s0 = arr[y + 1][x];
            }
            cell.x = desc.size * x;
            cell.y = desc.size * y;
        });
    });
    return arr[2][2];
}

module.exports = gridTraps;
