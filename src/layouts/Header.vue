<template>
    <header>
      <nav>
        <Row size="full">
          <Col>
            burger
            <g-link to="/">Home</g-link>
            <g-link to="/about">About</g-link>
            <g-link to="/projects">Projects</g-link>
          </Col>
          <Col>
            <g-link to="/">
              Obay
            </g-link>
          </Col>
          <Col></Col>
        </Row>
      </nav>
    </header>
</template>

<script>

export default {
    name: 'Header',
}
</script>