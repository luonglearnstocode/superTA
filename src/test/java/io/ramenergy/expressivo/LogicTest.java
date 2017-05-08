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
     * Test strategy
     * Plus, Subtract
     */

    @Test
    public void comparePlus2Numbers() throws Exception {
        assertTrue(Logic.compare("1 + 2", "6"));
    }

    @Test
    public void compareSubtract2Numbers() throws Exception {
        assertTrue(Logic.compare("5-7", "-2"));
    }

    @Test
    public void compare() throws Exception {
        assertTrue(Logic.compare("a + b", "b + a"));
        assertTrue(Logic.compare("2/4 + qWe", "qWe + 0.5"));
    }

}
