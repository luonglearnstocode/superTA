package io.ramenergy.expressivo;

import org.junit.Test;
import org.junit.runner.RunWith;

import static org.junit.Assert.*;

/**
 * Created by chanh on 5/8/2017.
 */
//@RunWith(Arquillian.class)
public class LogicTest {

    /**
     * Test Integers
     */

    @Test
    public void comparePlus2Integers() throws Exception {
        assertTrue(Logic.compare("1 + 2", "3"));
    }

    @Test
    public void comparePlus2IntegersFalse() throws Exception {
        assertFalse(Logic.compare("4 + 3", "9"));
    }

    @Test
        public void comparePlus2IntegersWithWhiteSpace() throws Exception {
            assertTrue(Logic.compare("1    + 2", "     3"));
    }

    @Test
    public void comparePlus2IntegersWithWhiteSpaceFalse() throws Exception {
        assertFalse(Logic.compare("1    + 2", "     4"));
    }

    @Test
    public void compareSubtract2Integers() throws Exception {
        assertTrue(Logic.compare("5-7", "-2"));
    }

    @Test
    public void compareSubtract2IntegersFalse() throws Exception {
        assertFalse(Logic.compare("5-7", "-3"));
    }

    @Test
    public void compareSubtract2IntegersWithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("5   -     7", "-2    "));
    }

    @Test
    public void compareSubtract2IntegersWithWhiteSpaceFalse() throws Exception {
        assertFalse(Logic.compare("5   -     7", "-3    "));
    }

    @Test
    public void compareMultiply2Integers() throws Exception {
        assertTrue(Logic.compare("81*2", "162"));
    }

    @Test
    public void compareMultiply2IntegersFalse() throws Exception {
        assertFalse(Logic.compare("81*2", "163"));
    }

    @Test
    public void compareMultiply2IntegersWithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("81*2      ", "      162"));
    }

    @Test
    public void compareMultiply2IntegersWithWhiteSpaceFalse() throws Exception {
        assertFalse(Logic.compare("81*2      ", "      163"));
    }

    @Test
    public void compareDivide2Integers() throws Exception {
        assertTrue(Logic.compare("9/3", "3"));
    }

    @Test
    public void compareDivide2IntegersFalse() throws Exception {
        assertFalse(Logic.compare("9/3", "2"));
    }

    @Test
    public void compareDivide2IntegersWithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("9  /   2", "   4.5"));
    }

    @Test
    public void compareDivide2IntegersWithWhiteSpaceFalse() throws Exception {
        assertFalse(Logic.compare("9  /   2", "   4"));
    }

    @Test
    public void comparePower2Integers() throws Exception {
        assertTrue(Logic.compare("5^2", "25"));
    }

    @Test
    public void comparePower2IntegersFalse() throws Exception {
        assertFalse(Logic.compare("5^2", "26"));
    }

    @Test
    public void comparePower2IntegersWithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("5^    2    ", "  25.0"));
    }

    @Test
    public void comparePower2IntegersWithWhiteSpaceFalse() throws Exception {
        assertFalse(Logic.compare("5^    2    ", "  25.1"));
    }

    /**
     * Test Floats
     */

    @Test
    public void comparePlus2Floats() throws Exception{
        assertTrue(Logic.compare("6.4+4.2", "10.6"));
    }

    @Test
    public void comparePlus2FloatsFalse() throws Exception{
        assertFalse(Logic.compare("6.4+4.2", "10.7"));
    }

    @Test
    public void comparePlus2FloatsWithWhiteSpace() throws Exception{
        assertTrue(Logic.compare("      6.2+4.2", "10.4"));
    }

    @Test
    public void comparePlus2FloatsWithWhiteSpaceFalse() throws Exception{
        assertFalse(Logic.compare("      6.2+4.2", "10.5"));
    }

    @Test
    public void compareSubtract2Floats() throws Exception{
        assertTrue(Logic.compare("9.4 -2.33", "7.07"));
    }

    @Test
    public void compareSubtract2FloatsFalse() throws Exception{
        assertFalse(Logic.compare("9.4 -2.33", "7.06"));
    }

    @Test
    public void compareSubtract2FloatsWithWhiteSpace() throws Exception{
        assertTrue(Logic.compare("9.4        -2.33", "7.07"));
    }

    @Test
    public void compareSubtract2FloatsWithWhiteSpaceFalse() throws Exception{
        assertFalse(Logic.compare("9.4        -2.33", "7.06"));
    }

    @Test
    public void compareMultiply2Floats() throws Exception{
        assertTrue(Logic.compare("2.3           * 4.7", "10.81"));
    }

    @Test
    public void compareMultiply2FloatsFalse() throws Exception{
        assertFalse(Logic.compare("2.3           * 4.7", "10.80"));
    }

    @Test
    public void compareMultiply2FloatsWithWhiteSpace() throws Exception{
        assertTrue(Logic.compare("2.3*        4.7", "10.81"));
    }

    @Test
    public void compareMultiply2FloatsWithWhiteSpaceFalse() throws Exception{
        assertFalse(Logic.compare("2.3*        4.7", "10.80"));
    }

    @Test
    public void compareDivide2Floats() throws Exception{
        assertTrue(Logic.compare("5/2", "2.5"));
    }

    @Test
    public void compareDivide2FloatsFalse() throws Exception{
        assertFalse(Logic.compare("5/2", "2.4"));
    }

    @Test
    public void compareDivide2FloatsWithWhiteSpace() throws Exception{
        assertTrue(Logic.compare("5/2.0        ", "2.5"));
    }

    @Test
    public void compareDivide2FloatsWithWhiteSpaceFalse() throws Exception{
        assertFalse(Logic.compare("5/2.0        ", "2.4"));
    }

    @Test
    public void comparePower2Floats() throws Exception{
        assertTrue(Logic.compare("7.3^3", "389.017"));
    }

    @Test
    public void comparePower2FloatsFalse() throws Exception{
        assertFalse(Logic.compare("7.3^3", "389.000"));
    }

    @Test
    public void comparePower2FloatsWithWhiteSpace() throws Exception{
        assertTrue(Logic.compare("    7.3   ^     3    ", "389.017"));
    }

    @Test
    public void comparePower2FloatsWithWhiteSpaceFalse() throws Exception{
        assertFalse(Logic.compare("    7.3   ^     3    ", "389.000"));
    }

    /**
     * Test Variables
     */

    @Test
    public void comparePlus2SingleLetterVariables() throws Exception {
        assertTrue(Logic.compare("r + w", "w+r"));
    }

    @Test
    public void comparePlus2SingleLetterVariablesFalse() throws Exception {
        assertFalse(Logic.compare("r + w", "w+f"));
    }

    @Test
    public void comparePlus2MultipleLettersVariables() throws Exception {
        assertTrue(Logic.compare("wrewfsd + dfqOOO", "dfqOOO + wrewfsd"));
    }

    @Test
    public void comparePlus2MultipleLettersVariablesFalse() throws Exception {
        assertFalse(Logic.compare("wrewfsd + dfqOOO", "dfqOOO + wrewfsa"));
    }

    @Test
    public void compareSubtract2SingleLetterVariables() throws Exception {
        assertTrue(Logic.compare("a-e", "-1*e+a"));
    }

    @Test
    public void compareSubtract2SingleLetterVariablesFalse() throws Exception {
        assertFalse(Logic.compare("a-e", "-2*e+a"));
    }

    @Test
    public void compareMultiply2Variables() throws Exception {
        assertTrue(Logic.compare("tt*3+jl", "jl+3*tt"));
    }

    @Test
    public void compareMultiply2VariablesFalse() throws Exception {
        assertFalse(Logic.compare("tt*3+jl", "jl+4*tt"));
    }

    @Test
    public void compareDivide2Variables() throws Exception {
        assertTrue(Logic.compare("y/e", "1/e*y"));
    }

    @Test
    public void compareDivide2VariablesFalse() throws Exception {
        assertFalse(Logic.compare("y/e", "2/e*y"));
    }

    @Test
    public void comparePower2Variables() throws Exception {
        assertTrue(Logic.compare("u^4", "u*u*u*u"));
    }

    @Test
    public void comparePower2VariablesFalse() throws Exception {
        assertFalse(Logic.compare("u^4", "u*u*u*r"));
    }

    /**
     * Test Mixed Variables and Numbers
     */

    @Test
    public void comparePlus2() throws Exception {
        assertTrue(Logic.compare("op + 3", "3+op"));
    }

    @Test
    public void comparePlus2False() throws Exception {
        assertFalse(Logic.compare("op + 3", "4+op"));
    }

    @Test
    public void comparePlus2WithWthiteSpace() throws Exception {
        assertTrue(Logic.compare("op        + 3", "3+      op"));
    }

    @Test
    public void comparePlus2WithWthiteSpaceFalse() throws Exception {
        assertFalse(Logic.compare("op        + 3", "4+      op"));
    }

    @Test
    public void compareSubtract2() throws Exception {
        assertTrue(Logic.compare("6-e", "-1*e+6"));
    }

    @Test
    public void compareSubtract2False() throws Exception {
        assertFalse(Logic.compare("6-e", "-1*e+7"));
    }

    @Test
    public void compareSubtract2WithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("6-       e", "-1      *e+6"));
    }

    @Test
    public void compareSubtract2WithWhiteSpaceFalse() throws Exception {
        assertFalse(Logic.compare("6-       e", "-1      *e+7"));
    }

    @Test
    public void compareMultiply2() throws Exception {
        assertTrue(Logic.compare("tt*5", "5*tt"));
    }

    @Test
    public void compareMultiply2False() throws Exception {
        assertFalse(Logic.compare("tt*5", "5*st"));
    }

    @Test
    public void compareMultiply2WithWthiteSpace() throws Exception {
        assertTrue(Logic.compare("tt*        5", "5    * tt   "));
    }

    @Test
    public void compareMultiply2WithWthiteSpaceFalse() throws Exception {
        assertFalse(Logic.compare("tt*        5", "5    * st   "));
    }

    @Test
    public void compareDivide2() throws Exception {
        assertTrue(Logic.compare("8/e", "1/e*8"));
    }

    @Test
    public void compareDivide2False() throws Exception {
        assertFalse(Logic.compare("8/e", "1/e*7"));
    }

    @Test
    public void compareDivide2WithWthiteSpace() throws Exception {
        assertTrue(Logic.compare("8/       e", "1      /e*8"));
    }

    @Test
    public void compareDivide2WithWthiteSpaceFalse() throws Exception {
        assertFalse(Logic.compare("8/       e", "1      /e*7"));
    }

    @Test
    public void comparePower2() throws Exception {
        assertTrue(Logic.compare("rr^3", "rr*rr*rr"));
    }

    @Test
    public void comparePower2False() throws Exception {
        assertFalse(Logic.compare("rr^3", "rr*rr*rs"));
    }

    @Test
    public void comparePower2WithWthiteSpace() throws Exception {
        assertTrue(Logic.compare("rr^     3", "  rr  *       rr*rr"));
    }

    @Test
    public void comparePower2WithWthiteSpaceFalse() throws Exception {
        assertTrue(!Logic.compare("rr^     3", "  rr  *       sr*rr"));
    }

    /**
     * Test Brackets Numbers
     */

    @Test
    public void comparePlus2IntegersWithBrackets() throws Exception {
        assertTrue(Logic.compare("(4+(2))", "6"));
    }

    @Test
    public void comparePlus2IntegersWithBracketsFalse() throws Exception {
        assertTrue(!Logic.compare("(4+(2))", "7"));
    }

    @Test
    public void comparePlus2FloatsWithBrackets() throws Exception {
        assertTrue(Logic.compare("(4.3+(2))", "6.3"));
    }

    @Test
    public void comparePlus2FloatsWithBracketsFalse() throws Exception {
        assertTrue(!Logic.compare("(4.3+(2))", "6.4"));
    }

    @Test
    public void compareSubtract2IntegersWithBrackets() throws Exception {
        assertTrue(Logic.compare("((7)-((3)))", "(4)"));
    }

    @Test
    public void compareSubtract2IntegersWithBracketsFalse() throws Exception {
        assertTrue(!Logic.compare("((7)-((3)))", "(5)"));
    }

    @Test
    public void compareSubtract2FloatsWithBrackets() throws Exception {
        assertTrue(Logic.compare("((7.6)-((3)))", "(4.6)"));
    }

    @Test
    public void compareSubtract2FloatsWithBracketsFalse() throws Exception {
        assertTrue(!Logic.compare("((7.6)-((3)))", "(4.4)"));
    }

    @Test
    public void compareMultiply2IntegersWithBrackets() throws Exception {
        assertTrue(Logic.compare("((6)*((4)))", "(24)"));
    }

    @Test
    public void compareMultiply2IntegersWithBracketsFalse() throws Exception {
        assertTrue(!Logic.compare("((6)*((4)))", "(23)"));
    }

    @Test
    public void compareMultiply2FloatsWithBrackets() throws Exception {
        assertTrue(Logic.compare("((6.1)*((4)))", "(24.4)"));
    }

    @Test
    public void compareMultiply2FloatsWithBracketsFalse() throws Exception {
        assertTrue(!Logic.compare("((6.1)*((4)))", "(24.3)"));
    }

    @Test
    public void compareDivide2IntegersWithBrackets() throws Exception {
        assertTrue(Logic.compare("((9)/((2)))", "(4.5)"));
    }

    @Test
    public void compareDivide2IntegersWithBracketsFalse() throws Exception {
        assertTrue(!Logic.compare("((9)/((2)))", "(4.4)"));
    }

    @Test
    public void compareDivide2FloatsWithBrackets() throws Exception {
        assertTrue(Logic.compare("((9.4)/((2)))", "(4.7)"));
    }

    @Test
    public void compareDivide2FloatsWithBracketsFalse() throws Exception {
        assertTrue(!Logic.compare("((9.4)/((2)))", "(4.9)"));
    }

    /**
     * Test Brackets Variables
     */

    @Test
    public void comparePlus2VariablesWithBrackets() throws Exception {
        assertTrue(Logic.compare("(a+(f))", "f+a"));
    }

    @Test
    public void comparePlus2VariablesWithBracketsFalse() throws Exception {
        assertTrue(!Logic.compare("(a+(f))", "f+s"));
    }

    @Test
    public void compareSubtract2VariablesWithBrackets() throws Exception {
        assertTrue(Logic.compare("(a-(f))", "-1*f+a"));
    }

    @Test
    public void compareSubtract2VariablesWithBracketsFalse() throws Exception {
        assertTrue(!Logic.compare("(a-(f))", "-1*f+s"));
    }

    @Test
    public void compareMultiply2VariablesWithBrackets() throws Exception {
        assertTrue(Logic.compare("(a*(f))", "1*f*a"));
    }

    @Test
    public void compareMultiply2VariablesWithBracketsFalse() throws Exception {
        assertTrue(!Logic.compare("(a*(f))", "1*f*s"));
    }

    @Test
    public void compareDivide2VariablesWithBrackets() throws Exception {
        assertTrue(Logic.compare("(2*a/b)", "1/b*2*a"));
    }

    @Test
    public void compareDivide2VariablesWithBracketsFalse() throws Exception {
        assertTrue(!Logic.compare("(2*a/b)", "1/b*2*s"));
    }

    /**
     * Test Error
     */

    @Test(expected = ArithmeticException.class)
    public void compareDivideByZero() throws Exception{
        Logic.compare("2/0", "3");
    }

    @Test(expected = ArithmeticException.class)
    public void compareDivideByZero2() throws Exception{
        Logic.compare("0/0", "6/0");
    }

    /**
     * Test Multiple Integers
     */

    @Test
    public void comparePlusMultipleIntegers() throws Exception {
        assertTrue(Logic.compare("1 + 2 +5", "8"));
    }

    @Test
    public void comparePlusMultipleIntegersFalse() throws Exception {
        assertTrue(!Logic.compare("1 + 2 +5", "7"));
    }

    @Test
    public void comparePlusMultipleIntegersWithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("1    + 2+7", "     10"));
    }

    @Test
    public void comparePlusMultipleIntegersWithWhiteSpaceFalse() throws Exception {
        assertTrue(!Logic.compare("1    + 2+7", "     11"));
    }

    @Test
    public void comparePlusMultipleIntegersFalse2() throws Exception {
        assertFalse(Logic.compare("4 + 3+2", "6"));
    }

    @Test
    public void compareSubtractMultipleIntegers() throws Exception {
        assertTrue(Logic.compare("10-5+7", "12"));
    }

    @Test
    public void compareSubtractMultipleIntegersFalse() throws Exception {
        assertTrue(!Logic.compare("10-5+7", "22"));
    }

    @Test
    public void compareSubtractMultipleIntegersWithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("5 -2  -     7", "-4    "));
    }

    @Test
    public void compareSubtractMultipleIntegersWithWhiteSpaceFalse() throws Exception {
        assertTrue(!Logic.compare("5 -2  -     7", "-5    "));
    }

    @Test
    public void compareMultiplyMultipleIntegers() throws Exception {
        assertTrue(Logic.compare("8*2*2", "32"));
    }

    @Test
    public void compareMultiplyMultipleIntegersFalse() throws Exception {
        assertTrue(!Logic.compare("8*2*2", "33"));
    }

    @Test
    public void compareMultiplyMultipleIntegersWithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("8*2  *2    ", "      32"));
    }

    @Test
    public void compareMultiplyMultipleIntegersWithWhiteSpaceFalse() throws Exception {
        assertTrue(!Logic.compare("8*2  *2    ", "      33"));
    }

    @Test
    public void compareDivideMultipleIntegers() throws Exception {
        assertTrue(Logic.compare("9/3/2", "3/2"));
    }

    @Test
    public void compareDivideMultipleIntegersFalse() throws Exception {
        assertTrue(!Logic.compare("9/3/2", "3/3"));
    }

    @Test
    public void compareDivideMultipleIntegersWithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("9  / 3/  2", "   1.5"));
    }

    @Test
    public void compareDivideMultipleIntegersWithWhiteSpaceFalse() throws Exception {
        assertTrue(!Logic.compare("9  / 3/  2", "   1.6"));
    }

    @Test
    public void comparePowerMultipleIntegers() throws Exception {
        assertTrue(Logic.compare("5^2^2", "625"));
    }

    @Test
    public void comparePowerMultipleIntegersFalse() throws Exception {
        assertTrue(!Logic.compare("5^2^2", "626"));
    }

    @Test
    public void comparePowerMultipleIntegersWithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("5^    2   ^2 ", "  625.0"));
    }

    @Test
    public void comparePowerMultipleIntegersWithWhiteSpaceFalse() throws Exception {
        assertTrue(!Logic.compare("5^    2   ^2 ", "  626.0"));
    }

    /**
     * Test Multiple Floats
     */

    @Test
    public void comparePlusMultipleFloats() throws Exception {
        assertTrue(Logic.compare("1.1 + 2 +5", "8.1"));
    }

    @Test
    public void comparePlusMultipleFloatsFalse() throws Exception {
        assertTrue(!Logic.compare("1.1 + 2 +5", "8.2"));
    }

    @Test
    public void comparePlusMultipleFloatsWithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("1    + 2+7.4", "     10.4"));
    }

    @Test
    public void comparePlusMultipleFloatsWithWhiteSpaceFalse() throws Exception {
        assertTrue(!Logic.compare("1    + 2+7.4", "     10.5"));
    }

    @Test
    public void comparePlusMultipleFloatsFalse2() throws Exception {
        assertFalse(Logic.compare("4 + 3.2+2", "6"));
    }

    @Test
    public void compareSubtractMultipleFloats() throws Exception {
        assertTrue(Logic.compare("10.1-5+7", "12.1"));
    }

    @Test
    public void compareSubtractMultipleFloatsFalse() throws Exception {
        assertTrue(!Logic.compare("10.1-5+7", "12.0"));
    }

    @Test
    public void compareSubtractMultipleFloatsWithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("5 -2.3  -     7", "-4.3    "));
    }

    @Test
    public void compareSubtractMultipleFloatsWithWhiteSpaceFalse() throws Exception {
        assertTrue(!Logic.compare("5 -2.3  -     7", "-4.2    "));
    }

    @Test
    public void compareMultiplyMultipleFloats() throws Exception {
        assertTrue(Logic.compare("8.1*2*2", "32.4"));
    }

    @Test
    public void compareMultiplyMultipleFloatsFalse() throws Exception {
        assertTrue(!Logic.compare("8.1*2*2", "32.3"));
    }

    @Test
    public void compareMultiplyMultipleFloatsWithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("8.1*2  *2    ", "      32.4"));
    }

    @Test
    public void compareMultiplyMultipleFloatsWithWhiteSpaceFalse() throws Exception {
        assertTrue(!Logic.compare("8.1*2  *2    ", "      32.3"));
    }

    @Test
    public void compareDivideMultipleFloats() throws Exception {
        assertTrue(Logic.compare("9.6/3/2", "3/2+0.1"));
    }

    @Test
    public void compareDivideMultipleFloatsFalse() throws Exception {
        assertTrue(!Logic.compare("9.6/3/2", "3/2+0.2"));
    }

    @Test
    public void compareDivideMultipleFloatsWithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("9.6  / 3/  2", "   1.6"));
    }

    @Test
    public void compareDivideMultipleFloatsWithWhiteSpaceFalse() throws Exception {
        assertTrue(!Logic.compare("9.6  / 3/  2", "   1.5"));
    }

    @Test
    public void comparePowerMultipleFloats() throws Exception {
        assertTrue(Logic.compare("5.2^2^2", "731.1616"));
    }

    @Test
    public void comparePowerMultipleFloatsFalse() throws Exception {
        assertTrue(!Logic.compare("5.2^2^2", "731.1615"));
    }

    @Test
    public void comparePowerMultipleFloatsWithWhiteSpace() throws Exception {
        assertTrue(Logic.compare("5.2^    2   ^2 ", "  731.161600   "));
    }

    @Test
    public void comparePowerMultipleFloatsWithWhiteSpaceFalse() throws Exception {
        assertTrue(!Logic.compare("5.2^    3   ^2 ", "  731.161600   "));
    }

    /**
     * Test Multiple Variables
     */

    @Test
    public void comparePlusMultipleSingleLetterVariables() throws Exception {
        assertTrue(Logic.compare("r + w +k", "k+w+r"));
    }

    @Test
    public void comparePlusMultipleSingleLetterVariablesFalse() throws Exception {
        assertTrue(!Logic.compare("r + w +k", "k+w+s"));
    }

    @Test
    public void comparePlusMultipleMultipleLettersVariables() throws Exception {
        assertTrue(Logic.compare("wrewfsd + dfqOOO+123", "123+dfqOOO + wrewfsd"));
    }

    @Test
    public void comparePlusMultipleMultipleLettersVariablesFalse() throws Exception {
        assertTrue(!Logic.compare("wrewfsd + dfqOOO+123", "123+dfqOOO + wrswfsd"));
    }


    @Test
    public void compareSubtractMultipleSingleLetterVariables() throws Exception {
        assertTrue(Logic.compare("a-e+poi", "poi-1*e+a"));
    }

    @Test
    public void compareSubtractMultipleSingleLetterVariablesFalse() throws Exception {
        assertTrue(!Logic.compare("a-e+poi", "poi-1*e+s"));
    }

    @Test
    public void compareMultiplyMultipleVariables() throws Exception {
        assertTrue(Logic.compare("tt*e+jl", "jl+e*tt"));
    }

    @Test
    public void compareMultiplyMultipleVariablesFalse() throws Exception {
        assertTrue(!Logic.compare("tt*e+jl", "jl+e*st"));
    }

    @Test
    public void compareDivideMultipleVariables() throws Exception {
        assertTrue(Logic.compare("(y/e)/rre", "1/rre*1/e*y"));
    }

    @Test
    public void compareDivideMultipleVariablesFalse() throws Exception {
        assertTrue(!Logic.compare("(y/e)/rre", "1/rre*1/e*s"));
    }

    @Test
    public void comparePowerMultipleVariables() throws Exception {
        assertTrue(Logic.compare("u^4*e*q", "q*e*u*u*u*u"));
    }

    @Test
    public void comparePowerMultipleVariablesFalse() throws Exception {
        assertTrue(!Logic.compare("u^4*e*q", "q*e*u*u*u*s"));
    }

    /**
     * Test Precision
     */

    @Test
    public void comparePlus2FloatsWithPrecision() throws Exception{
        assertTrue(Logic.compare("6.4+  4.2", "10.600001"));
    }

    @Test
    public void comparePlus2FloatsWithPrecisionFalse() throws Exception{
        assertTrue(!Logic.compare("6.5+  4.2", "10.600001"));
    }

}
