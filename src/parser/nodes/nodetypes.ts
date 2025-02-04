
export enum NT {

    // Members
    // -------
    MEMBER_ENTRY,   // Entry:
    MEMBER_FUNC,    // Func:
    MEMBER_EVENT,   // Event:
    MEMBER_STRUCT,  // Struct:
    MEMBER_METHOD,  // <Struct>:

    // Clauses
    // -------
    CLAUSE_PARAMETER, 
    CLAUSE_TYPE,

    // Statements
    // ----------
    STATEMENT_BLOCK,
    STATEMENT_IF,
    STATEMENT_WHILE,
    STATEMENT_FOR,
    STATEMENT_FOREACH,
    STATEMENT_LOCAL,
    STATEMENT_EXPRESSION,

    // Expressions
    // -----------
    EXPRESSION_LITERAL,
    EXPRESSION_UNARY,
    EXPRESSION_BINARY,
    EXPRESSION_VARIABLE,
    EXPRESSION_CALL,
};