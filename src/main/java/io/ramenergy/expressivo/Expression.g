//grammar Expression;

 
root ::= sum;
@skip whitespace{
	sum ::= subtraction ('+' subtraction)*;
	subtraction ::= product ('-' product)*;
	product ::= division ('*' division)*;
	division ::= power ('/' power)*;
	power ::= primitive ('^' primitive)*;
	primitive ::= number | variable | '(' sum ')';
}
number ::= [+-]? ([0-9]+ ("."[0-9]+)? | "."[0-9]+) ([eE]"-"?[0-9]+)?;
variable ::= [a-zA-Z]+;
whitespace ::= [ ]+;
