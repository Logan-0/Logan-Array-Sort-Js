class CleanSorter {
    /**
     * Create an object to sort
     * 
     */

    /** 
     * Not much going on just adding to
     */
    constructor() {

    }


    /** 
     * Comparing the string in a Json Object attr such as "lastName", or "firstName"
     * s1: String1, s2: String2
     * lc1: lowercase String1, lc2: lowercaseString2
     * 
     * compare values and return
     */
    compareString(s1, s2) {
        let lc1 = s1.toLowerCase(),
            lc2 = s2.toLowerCase();

        if (lc1 < lc2) {
            return -1;
        } else if (lc1 > lc2) {
            return 1;
        } else {
            return 0;
        }
    }


    /** 
     * Comparing numbers
     * n1 Number1, n2 Number2
     * Check based upon simple comparison; Is number negative after subtraction.
     * 
     * compare values and return
     */
    compareNumber(n1, n2) {
        return n1 - n2;
    }



    /** 
     * Comparing string dates
     * 
     * sd1 StringDate1, sd2 StringDate2
     * nd1 NewDate1, nd2 NewDate2
     * 
     * Convert String Date to Date Object
     * 
     * Compare values and return most recent Date First
     */
    compareDate(sd1, sd2) {
        let nd1 = new Date(sd1),
            nd2 = new Date(sd2);

        return nd1 - nd2
    }


}


/* 
 * To send out for future use
 */
module.exports = CleanSorter;