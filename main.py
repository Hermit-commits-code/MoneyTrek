import sys
from PyQt6.QtWidgets import (
    QApplication,
    QMainWindow,
    QTabWidget,
    QWidget,
    QVBoxLayout,
    QLabel,
)


class RegisterTab(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout()
        layout.addWidget(QLabel("Check Register will be shown here."))
        self.setLayout(layout)


class CommissionTab(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout()
        layout.addWidget(QLabel("Commission Tracker will be shown here."))
        self.setLayout(layout)


class SummaryTab(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout()
        layout.addWidget(QLabel("Monthly Summary will be shown here."))
        self.setLayout(layout)


class BreakdownTab(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout()
        layout.addWidget(QLabel("Category Breakdown will be shown here."))
        self.setLayout(layout)


class MoneyTrekApp(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("MoneyTrek - Financial Tracker")
        self.setGeometry(100, 100, 1000, 600)

        tabs = QTabWidget()
        tabs.addTab(RegisterTab(), "Check Register")
        tabs.addTab(CommissionTab(), "Commission Tracker")
        tabs.addTab(SummaryTab(), "Summary")
        tabs.addTab(BreakdownTab(), "Breakdown")

        self.setCentralWidget(tabs)


if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MoneyTrekApp()
    window.show()
    sys.exit(app.exec())
